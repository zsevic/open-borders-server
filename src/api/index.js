import { errors } from 'celebrate';
import { Router } from 'express';
import countriesRoutes from './countries/countries.routes';
import { errorHandler } from './error-handler';

const apiRouter = Router();

apiRouter.use('/countries', countriesRoutes);
apiRouter.use(errors());
apiRouter.use(errorHandler);

export default apiRouter;
