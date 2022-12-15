# TTPR-Server  

This repo represent the server side of a tabletop roleplaying charhachter creation service for dungeons and dragons 5th edition.
It's also worth knowing that this aplication utilices the open "dnd5eapi" API.
you can learn more about the API here: https://github.com/5e-bits/5e-srd-api

## local setup

before getting the application upp and running you must first do a few things after cloning this repository.
first, create a .env file in the root of this application. the .env file should contain the following things:

> MYSQL_HOST=127.0.0.1  
> MYSQL_PORT=3306  
> MYSQL_ROOT_PASSWORD=123456  
> MYSQL_DATABASE=ttrp-db  
> MYSQL_USER=admin  
> MYSQL_PASSWORD=123456  
> PORT=9005  
> DND_API=https://www.dnd5eapi.co/api

(OBS: this .env file is only an example for local use)

After you've created the .env file, run the the following commands in termina:

> yarn install  
> yarn dev  

or 

> npm install  
> npm run dev  

You should now be able to use this server throu: [`localhost:9005/`](#localhost:9005/)
