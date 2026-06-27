# 05 — Deployment (Podman / Container)

The site must build and run as a container with **Podman** (Docker-compatible). Use Next.js
`output: 'standalone'` to ship a minimal runtime.

## `next.config.mjs`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};
export default nextConfig;
```

## `Containerfile` (multi-stage)
Two base images, chosen deliberately:
- **Build stages** use `node:*-slim` (Debian/glibc), **not** `node:*-alpine`. Alpine uses musl
  libc and fails to load the Next.js SWC binary resolved from a glibc/darwin lockfile
  (`Failed to load SWC binary for linux/arm64`).
- **Runtime stage** uses **`cgr.dev/chainguard/node`** (Wolfi), a minimal, continuously-patched
  image with no perl/ncurses/npm and always-current OpenSSL. This keeps the published image at
  **zero known CVEs**. `node:*-slim` is *not* used at runtime because Debian's `perl-base`/
  `ncurses` carry CRITICAL/HIGH CVEs with no available fix, and `distroless` lags on freshly
  disclosed OpenSSL CVEs. Chainguard's entrypoint is already `node` and the default user is
  non-root (uid 65532), so no shell/user setup is needed.

> Image-level vuln scanning: `trivy image --severity CRITICAL,HIGH justo-front:latest`
> (or scan a `podman save` tarball with `trivy image --input`).

```dockerfile
# ---- deps ----
FROM node:24-slim AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ---- build ----
FROM node:24-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runner ----
FROM cgr.dev/chainguard/node:latest AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
COPY --from=builder --chown=65532:65532 /app/public ./public
COPY --from=builder --chown=65532:65532 /app/.next/standalone ./
COPY --from=builder --chown=65532:65532 /app/.next/static ./.next/static
EXPOSE 3000
CMD ["server.js"]
```

> **App-dependency CVEs:** `postcss` is pinned to a patched range via a `$postcss` override in
> `package.json` (the override mirrors the direct devDependency to avoid npm `EOVERRIDE`). Run
> `npm audit` to check app deps.

## `.containerignore`
```
node_modules
.next
.git
docs
*.md
Gemini_Generated_Image_*.png
.github
```
(Keep `public/logo.png` — it's copied into `public/`, not ignored.)

## Build & run
```bash
podman build -t justo-front:latest -f Containerfile .
podman run --rm -p 3000:3000 justo-front:latest
# → http://localhost:3000  (redirects to /fr)
```

## CI (optional, `.github/workflows/ci.yml`)
- On push/PR: `npm ci`, `npm run lint`, `npm run build`.
- Optionally `podman build` to validate the image.

## Hosting notes
- Domains `justodot.com` (FR default) and `justodot.fr` both point at the same container.
- Behind the proxy, set `X-Forwarded-*`; Next standalone listens on `$PORT` (3000).
- Static assets are served by the Next server in standalone mode (no separate CDN required for v1).
