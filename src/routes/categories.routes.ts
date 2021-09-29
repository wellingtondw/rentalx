import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import importCategoriesController from "../modules/cars/useCases/importCategories";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
  listCategoriesController().handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  importCategoriesController().handle(req, res);
});

export default categoriesRoutes;
