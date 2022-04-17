import { v4 as uuidV4 } from 'uuid';

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  // se não houver id -> criar id
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification };
