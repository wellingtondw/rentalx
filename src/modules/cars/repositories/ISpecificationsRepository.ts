import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create: ({ name, description }) => Promise<void>;
  findByName: (name: string) => Promise<Specification>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
