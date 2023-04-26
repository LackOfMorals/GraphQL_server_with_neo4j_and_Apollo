# Uses the node base image with the latest LTS version
FROM node:20.0.0
# Informs Docker that the container listens on the 
# specified network ports at runtime
EXPOSE 4000
# Copies all files into new app directory on the container
COPY .. app/
# Changes working directory to the new directory just created
WORKDIR /app
# Installs npm dependencies on container
RUN npm ci
# Command container will actually run when called
CMD ["node", "index.js"]
