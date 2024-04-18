# Use an official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm@8.9.0

# Install dependencies using pnpm for the entire workspace
RUN pnpm install --production

# Copy the entire project into the container
COPY . .

# Build the bot app
RUN pnpm install --filter tme-bot --dev

# Build the bot app
RUN pnpm build:tme-bot

# Use a new stage for the final image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the built bot app from the previous stage
COPY --from=build /app/apps/tme-bot/build ./build

# Copy the .env file from the previous stage
COPY --from=build /app/apps/tme-bot/.env .

# Expose port 4080
EXPOSE 4080

# Start the bot app
CMD ["node", "./build/index.js"]