# Runtime only (no build inside Docker)
FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@10.16.0

# Copy only build artifacts from GitHub Actions
COPY .env ./
COPY .next ./.next
COPY public ./public
COPY node_modules ./node_modules
COPY package.json ./package.json

# Default Next.js port
EXPOSE 3000

# Run Next.js in production
CMD ["pnpm", "start"]
