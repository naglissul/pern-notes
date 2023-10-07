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

Also, change everywhere the 192.168.0.114 to your running machine ip address.

### dev env
```
Install postgresql and connect to db with default settings (psql -h localhost -U postgres -p 5432 -d postgress) and run commands from db/createdb.sql to initialize.
```
```
cd be
npm install 
cd src  
node routing.js
```
```
cd fe
npm install 
npm start
```
### prod env

```
docker-compose up
docker exec -it pern-notes-pgdb psql -h 192.168.0.114 -U pguser -d notesdb
pgpass!!
CREATE TABLE notes (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    PRIMARY KEY (id)
);
exit
```

That's it. Your app should run on:  
192.168.0.114:3000 (As mentioned before, replace ip address with host name)