This has a very basic GraphQL server using Apollo.  You can also put this into a Docker container


##GraphQL Server
Copy .env.example to .env and set the values for connecting to your Neo4j database.  If using Aura, the connection url is shown in the Aura console - it starts with neo4j+s

You put your GraphQL type defs etc.. in /typedefs/default.graphql.  This file contains those for the Movies example graph database.  Hint:  Use https://graphql-toolbox.neo4j.io/ to help create this

Then run the server with 

```
node index.js
```

## Docker build for graphql server 
- Apollo Server
- Neo4j graphql libary


.env file contains connection information for neo4j database

If neo4j is in a docker container on the same physical host, make sure to use the host IP address and not localhost
as localhost will refer to the network used  by the graphql server container. 

Build docker image

cd into the folder with these files

then

```
docker build . -t neo4j-apollo-graphql-server
```

to run container

```
docker run -p 4000:4000 --name graphqlServer -d neo4j-apollo-graphql-server
```
