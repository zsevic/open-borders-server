import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

export default (app) => {
  app.use(compression());
  app.use(cors({
    origin: process.env.CLIENT_URL,
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
};
