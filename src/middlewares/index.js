import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import { RATE_LIMIT_REQUESTS, RATE_LIMIT_TIME } from '../config/constants';

export default (app) => {
  app.use(compression());
  app.use(cors({
    origin: process.env.CLIENT_URL,
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.set('trust proxy', 1);
  app.use(
    rateLimit({
      windowMs: RATE_LIMIT_TIME,
      max: RATE_LIMIT_REQUESTS,
    }),
  );
  app.use(helmet());
  app.use(morgan('dev'));
};
