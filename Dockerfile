# --- dev: Vite dev server with hot reload (used by docker-compose) ---
FROM node:22-alpine AS dev
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# --- build: production bundle ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# --- preview: serve the production bundle with nginx (local check only;
#     real hosting is GitHub Pages) ---
FROM nginx:alpine AS preview
COPY --from=build /app/dist /usr/share/nginx/html
# SPA fallback so deep links like /blog/foo work
RUN printf 'server {\n  listen 80;\n  root /usr/share/nginx/html;\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
