import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

// chama constructor importado
const categoriesRepository = new CategoriesRepository();

// router do express
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  // validação
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exists!' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
