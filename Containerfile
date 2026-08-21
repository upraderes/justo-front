# ---- deps ----
# Debian-slim (glibc) base avoids the Alpine/musl SWC binary mismatch.
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
# Chainguard's minimal, continuously-patched node image: no perl/ncurses/npm and
# always-current OpenSSL — typically zero known CVEs, unlike node:*-slim (perl/
# ncurses CRITICALs with no Debian fix) or distroless (lags on fresh CVEs).
# Entrypoint is already `node`; default user is non-root (uid 65532).
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
