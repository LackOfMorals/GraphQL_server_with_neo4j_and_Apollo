import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
// import { makeExecutableSchema } from '@graphql-tools/schema';
import path from 'path';
import { fileURLToPath } from 'url';

// need to get the current path and store in __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const gqlFiles = readdirSync(join(__dirname, './typedefs'));

let typeDefs = '';

gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, './typedefs', file), {
    encoding: 'utf8',
  });
});



export default typeDefs;
