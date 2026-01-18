# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

RUN npm install -g pnpm@10.28.0

COPY package.json pnpm-lock.yaml* ./

# Install with shamefully-hoist to ensure overrides are applied
RUN pnpm install --frozen-lockfile --shamefully-hoist

COPY . .

RUN pnpm build

# Stage 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm@10.28.0

ENV NODE_ENV=production

# Install only production dependencies with overrides applied
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --prod --frozen-lockfile --shamefully-hoist

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 3000
CMD ["pnpm", "start"]
