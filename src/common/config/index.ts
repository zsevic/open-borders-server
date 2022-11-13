import { PORT } from './constants';

export default () => ({
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
  REDIS_URL: process.env.REDIS_URL,
  PORT: process.env.PORT || PORT,
});
