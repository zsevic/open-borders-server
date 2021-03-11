# open-borders-server

> Back-end for [open-borders](https://github.com/zsevic/open-borders)

## Getting started

### Prerequisites

- Node.js installed (version 14)
- Local Redis database

### Setup

```bash
git clone https://github.com/zsevic/open-borders-server
cd open-borders-server
cp .env.sample .env # change values
npm i
redis-server /usr/local/etc/redis.conf
npm run start:dev
```

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Testing

```bash
npm test
```

### API documentation

API documentation is generated using [@nestjs/swagger](https://www.npmjs.com/package/@nestjs/swagger) module at `/api-docs` endpoint

### Technologies used

- Node.js, TypeScript, NestJS, Redis (for API)
- puppeteer and cheerio (for scraping)
- node-nlp (for NLP)
