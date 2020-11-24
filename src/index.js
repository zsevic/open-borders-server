import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { CronJob } from 'cron';
import expressOasGenerator from 'express-oas-generator';
import morgan from 'morgan';
import './config/database';
import apiRoutes from './api';
import constants from './config/constants';
import { upsertData } from './cron-job';

const app = express();
const { PORT } = constants;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
expressOasGenerator.init(app, {});
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const job = new CronJob('0 */12 * * *', upsertData);
job.start();

export default app;
