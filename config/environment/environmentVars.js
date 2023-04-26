import dotenv from 'dotenv';

dotenv.config();

const graphql_port = process.env.GRAPHQL_PORT;
const neo4j_user  = process.env.NEO4J_USER;
const neo4j_pwd = process.env.NEO4J_PWD;
const neo4j_server = process.env.NEO4J_SERVER;

export { graphql_port, neo4j_user, neo4j_pwd,  neo4j_server};
