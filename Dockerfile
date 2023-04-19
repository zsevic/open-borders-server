FROM buildkite/puppeteer:latest

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/

RUN npm install && npm run build

COPY . /app/

ENV NODE_ENV production

CMD [ "npm", "run", "start" ]
