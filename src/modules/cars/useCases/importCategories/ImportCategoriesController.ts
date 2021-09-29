import { Request, Response } from "express";

import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    await this.importCategoriesUseCase.execute(file);

    return res.send();
  }
}

export { ImportCategoriesController };
