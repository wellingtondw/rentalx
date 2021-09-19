import { Router } from "express";

import { CategoriesRepository } from "../cars/repositories/CategoriesRepository";
import { createCategoryController } from "../cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

export default categoriesRoutes;
