FROM node:10 as build

COPY ./ /app

WORKDIR /app
RUN npm install && npm run build

FROM nginx:1.17

RUN mkdir /app

COPY --from=0 /app/dist /app
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf