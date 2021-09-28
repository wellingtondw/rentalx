import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create: ({ name, description }) => void;
  list: () => Category[];
  findByName: (name: string) => Category;
}

export { ICreateCategoryDTO, ICategoriesRepository };
