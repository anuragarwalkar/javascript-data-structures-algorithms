FROM node:alpine
# Copying app required files from current folder
COPY . /app
# Setting work directory to /app
WORKDIR /app
# Running the command
CMD node index.js