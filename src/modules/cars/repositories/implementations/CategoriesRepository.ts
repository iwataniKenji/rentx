import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  // impossibilita chamada dos atributos do Repository em qualquer lugar (apenas internamente)
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  // retorna lista de categorias
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  // executa validação de categoria
  async findByName(name: string): Promise<Category> {
    // select * from categories where name = 'name' limit 1
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
