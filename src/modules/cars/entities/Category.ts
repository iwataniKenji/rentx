import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

// definindo a entidade de categorias (coluna primária e colunas)
@Entity('categories')
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  create_at: Date;

  // se não houver id -> criar id
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
