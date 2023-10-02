# Basic PERN stack notes app

## Tech

- Postgresql
- Express.js
- React.js
- Node.js
- Docker
- dotenv

## How to run

*** WARNING!!!! ***  
I include .env files and secrets in docker-compose.yaml file JUST FOR EUDCATIONAL PURPOSES  
If you run this app somewhere on your server, MAKE SURE THAT:
1. You add .env file names to .gitignore file, before adding your own secrets/passwords
2. Add docker-compose.yaml file to .gitignore, or just reparate secrets from it or have separate docker-compose.yaml files for different environments

### dev env

1. [optional] initialize local db [instructions here](db\README.md)
2. run be: cd be/src && node routing.js
3. run fe: cd fe && npm start

### prod env

