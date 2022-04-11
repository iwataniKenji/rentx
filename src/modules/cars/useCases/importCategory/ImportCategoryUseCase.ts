import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

class ImportCategoryUseCase {
  // recebe arquivo do insomnia
  execute(file: Express.Multer.File): void {
    // cria stream do arquivo
    const stream = fs.createReadStream(file.path);

    // irá receber os chunks  
    const parseFile = csvParse();

    // pipe -> possibilita direcionar cada chunk para local determinado (parseFile)
    stream.pipe(parseFile);

    // cada linha -> console.log
    parseFile.on('data', async line => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
