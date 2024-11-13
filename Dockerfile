# base image
FROM docker.io/node:20.18.0-alpine3.19 AS builder
WORKDIR /app

LABEL authors="alexanderdolgosheev@gmail.com"

# install dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
RUN mkdir build
RUN yarn build

FROM ghcr.io/nginxinc/nginx-unprivileged:1.25.2-alpine-slim AS final
WORKDIR /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=101:101 /app/dist/ .