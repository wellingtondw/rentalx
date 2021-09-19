import { Router } from "express";

import { createCategoryController } from "../cars/useCases/createCategory";
import { listCategoriesController } from "../cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  listCategoriesController.handle(req, res);
});

export default categoriesRoutes;
