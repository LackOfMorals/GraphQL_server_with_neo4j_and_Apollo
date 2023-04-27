
// environmentVars reads these values from local .env file 
// and exports them
import  envs from './config/environment/environmentVars.js';


// Items needed from modules
import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server";
import  neo4j  from "neo4j-driver";

// The typeDefs are stored under /typeDefs 
// schema.js processes these and exports as a string
// 'typeDefs'
import typeDefs from './schema.js';

const driver = neo4j.driver(
    envs.NEO4J_SERVER,
    neo4j.auth.basic(envs.NEO4J_USER, envs.NEO4J_PWD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
  const server = new ApolloServer({
      schema,
  });

  server
    .listen({ port : envs.GRAPHQL_PORT, host : envs.GRAPHQL_IP })
    .then(({ url }) => { console.log(`🚀 Server ready at ${url}`);
  });
})

