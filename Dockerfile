# Step 1: Use an official Node.js image as a base
FROM node:18-alpine AS base

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install pnpm
RUN npm install -g pnpm

# Step 4: Copy the package files to the container
COPY package.json pnpm-lock.yaml ./

# Step 5: Install project dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Step 6: Copy the rest of the application files
COPY . .

# Step 7: Build the Next.js application for production
RUN pnpm build

# Step 8: Expose the port that Next.js will run on
EXPOSE 3000

# Step 9: Run the application in production mode
CMD ["pnpm", "start"]
