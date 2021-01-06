FROM node:lts

WORKDIR /app

COPY . .

RUN npm install && \
    npm run init && \
    npm run build

EXPOSE 3001

CMD ["npm","run","start-server"]

