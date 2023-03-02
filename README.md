# TTPR-Server  

This repo represent the server side of a tabletop roleplaying charhachter creation service for dungeons and dragons 5th edition.
It's also worth knowing that this aplication utilices the open "dnd5eapi" API.
you can learn more about the API here: https://github.com/5e-bits/5e-srd-api

## local setup

### requirements
To start this aplication you'll need to have NodeJs (=> v16.13.2) and Docker (=> v4.15.0) installed on your machine.

Before getting the application upp and running you must first do a few things after cloning this repository.
first, create a .env file in the root of this application. the .env file should contain the following things:

> MYSQL_HOST=127.0.0.1  
> MYSQL_PORT=3306  
> MYSQL_ROOT_PASSWORD=123456  
> MYSQL_DATABASE=ttrp-db  
> MYSQL_USER=admin  
> MYSQL_PASSWORD=123456  
> PORT=9005  
> DND_API=https://www.dnd5eapi.co/api

(OBS: this .env file is only an example for local use. with the exeption of "DND_API" the other vaiables values are up to your own preferences.)

After you've created the .env file, run the the following commands in this repositories termina:

> npm install

After which You'll need to boot up the dev database to have something to work with on your loxal machine.

> npm run db:boot

After this you should be able to start this this application by runing:
  
> npm run dev  

### alternativly: 

if your using yarn just run this following comands in the same order: 

> yarn install

> yarn db:boot

> yarn dev  

You should now be able to use this server throu: [`localhost:9005/`](#localhost:9005/)
