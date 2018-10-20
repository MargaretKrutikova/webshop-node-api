import fs from 'fs';
import { RequestProductsModel } from './model';

export const readProducts = async (request: RequestProductsModel) => {
  return new Promise<ReadonlyArray<any>>((resolve, reject) => {
    fs.readFile('./data/products.json', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const products: ReadonlyArray<any> = JSON.parse(data.toString());

        const startIndex = (request.page - 1) * request.itemsPerPage;
        const paginated = products.slice(
          startIndex,
          startIndex + request.itemsPerPage
        );
        resolve(paginated);
      }
    });
  });
};
