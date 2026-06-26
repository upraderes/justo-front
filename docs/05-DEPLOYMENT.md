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
> Use `node:20-slim` (Debian/glibc), **not** `node:20-alpine`. Alpine uses musl libc and
> fails to load the Next.js SWC binary resolved from a glibc/darwin lockfile
> (`Failed to load SWC binary for linux/arm64`).

```dockerfile
# ---- deps ----
FROM node:20-slim AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ---- build ----
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runner ----
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
```

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
