import { Router } from 'express';
import * as ProductsController from './products/controller';

const ProductsRouter = Router();
ProductsRouter.get('/', ProductsController.getAll);
export { ProductsRouter };

const SwaggerAPIRouter = Router();
export { SwaggerAPIRouter };
