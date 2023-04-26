Docker build for graphql server 
- Apollo Server
- Neo4j graphql libary


.env file contains connection information for neo4j database

If neo4j is in a docker container on the same physical host, make sure to use the host IP address and not localhost
as localhost will refer to the network used  by the graphql server container. 

Build docker image

cd into the folder with these files

then

docker build . -t neo4j-apollo-graphql-server

to run container

docker run -p 4000:4000 --name graphqlServer -d neo4j-apollo-graphql-server

