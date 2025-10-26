FROM node:lts AS build

# Build stage installs SQLite toolchain so the SQLite-based dependencies can compile
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app
# Copy manifests first to leverage cached layer when dependencies stay unchanged
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
# Drop dev-only dependencies before handing artifacts to the runtime image
RUN npm prune --omit=dev

FROM node:lts-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Runtime image only carries production assets to keep size small
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build

# Serve the app on port 3000
EXPOSE 3000
CMD ["node", "build"]