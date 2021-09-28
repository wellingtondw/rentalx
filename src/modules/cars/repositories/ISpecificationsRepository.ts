import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create: ({ name, description }) => void;
  findByName: (name: string) => Specification;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
