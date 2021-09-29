import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create: ({ name, description }) => Promise<void>;
  list: () => Promise<Category[]>;
  findByName: (name: string) => Promise<Category>;
}

export { ICreateCategoryDTO, ICategoriesRepository };
