FROM node:22-alpine AS base

RUN npm install -g pnpm

WORKDIR /

COPY . ./

RUN pnpm install

CMD ["pnpm", "dev"]