import { PORT } from './constants';
import redisUrlParse from 'redis-url-parse';

export default () => {
  const redisConfig = redisUrlParse(process.env.REDIS_URL);

  return {
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
    REDIS_DB: redisConfig.db,
    REDIS_HOST: redisConfig.host,
    REDIS_PASSWORD: redisConfig.pass,
    REDIS_PORT: redisConfig.port,
    PORT: process.env.PORT || PORT,
  };
};
