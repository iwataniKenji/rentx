import { Specification } from '../model/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    // cria nova instância
    const specification = new Specification();

    // passa atributos ao objeto "specification"
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    // insere na tabela
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );
    return specification;
  }
}

export { SpecificationsRepository };
