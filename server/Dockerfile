FROM node:17-alpine3.14
RUN addgroup app && adduser -S -G app app

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000

USER app

CMD [ "node", "index.js" ]