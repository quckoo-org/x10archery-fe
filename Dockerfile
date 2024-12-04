FROM node:22.11.0-alpine3.20 AS builder
WORKDIR /app

LABEL authors="alexanderdolgosheev@gmail.com"

RUN corepack enable
RUN corepack prepare yarn@4.5.1 --activate

COPY .yarnrc.yml ./
COPY package.json yarn.lock ./

RUN yarn install --immutable --inline-builds

COPY . .
RUN yarn build

FROM node:22.11.0-alpine3.20 AS runner
WORKDIR /app

FROM ghcr.io/nginxinc/nginx-unprivileged:1.25.2-alpine-slim AS final
WORKDIR /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=101:101 /app/dist/ .