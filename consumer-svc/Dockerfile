FROM node:20.10.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

CMD ["node", "./build/consumer.js"]