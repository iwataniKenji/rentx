import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  // estancia repositório
  public static getInstance(): CategoriesRepository {
    // caso não haja -> criar repositório
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    // caso haja -> envia existente
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    // chama constructor
    const category = new Category();

    // copia os atributos no objeto
    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });

    this.categories.push(category);
  }

  // retorna lista de categorias
  list(): Category[] {
    return this.categories;
  }

  // executa validação de categoria
  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
