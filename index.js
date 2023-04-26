
// environmentVars reads these values from local .env file 
// and exports them
import { neo4j_pwd } from './config/environment/environmentVars.js';
import { neo4j_server } from './config/environment/environmentVars.js';
import { neo4j_user } from './config/environment/environmentVars.js';

import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server";
import  neo4j  from "neo4j-driver";

// The typeDefs are stored under /typeDefs 
// schema.js processes these and exports as a string
// 'typeDefs'
import typeDefs from './schema.js';


const driver = neo4j.driver(
    neo4j_server,
    neo4j.auth.basic(neo4j_user, neo4j_pwd)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
  const server = new ApolloServer({
      schema,
  });

  server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
  });
})

