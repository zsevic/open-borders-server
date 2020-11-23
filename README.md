# open-borders-server

> open-borders server

### Setup

```bash
git clone https://github.com/zsevic/open-borders-server
cd open-borders-server
cp .env.sample .env # change values
npm i
mongod --dbpath=mongodb/data
npm run dev
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

Generated at `/api-docs` endpoint

### Technologies used

- Node.js, Express, MongoDB
