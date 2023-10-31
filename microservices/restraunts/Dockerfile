FROM node:lts-alpine

RUN mkdir /app

COPY ./server.js /app/server.js
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install

ENTRYPOINT [ "node" ]
CMD [ "server.js" ]