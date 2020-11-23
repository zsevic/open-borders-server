import { Router } from 'express';
import * as countriesController from './countries.controller';
import { asyncWrap } from '../../utils';

const countriesRouter = Router();
countriesRouter.get('/', asyncWrap(countriesController.getCountryListHandler));

export default countriesRouter;
