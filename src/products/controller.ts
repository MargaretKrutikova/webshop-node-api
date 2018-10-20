import { Request, Response } from "express";
import { RequestProductsModel } from "./model";
import { readProducts } from "./service";

export const getAll = async (req: Request, resp: Response) => {
  const model: RequestProductsModel = {
    itemsPerPage: Number(req.query.itemsPerPage),
    page: Number(req.query.page)
  };
  try {
    const products: ReadonlyArray<any> = await readProducts(model);
    resp.status(200).send(products);
  } catch (error) {
    resp.send({
      msg: "Not found",
      status: 404
    });
  }
};
