# 1. Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install deps
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
