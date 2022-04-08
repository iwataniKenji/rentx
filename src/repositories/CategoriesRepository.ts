import { Category } from '../model/Category';

// DTO -> data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
