# TTPR-Server  

This repo represent the server side of a tabletop roleplaying charhachter creation service for dungeons and dragons 5th edition.
It's also worth knowing that this aplication utilices the open "dnd5eapi" API.
you can look up the repo fro it here: https://github.com/5e-bits/5e-srd-api

to get it up and running do the do the following steps after cloning it from github.

## create a .env file

in the root of the directory create a .env file like this:

> MYSQL_HOST=127.0.0.1  
> MYSQL_PORT=3306  
> MYSQL_ROOT_PASSWORD=123456  
> MYSQL_DATABASE=ttrp-db  
> MYSQL_USER=admin  
> MYSQL_PASSWORD=123456  
> PORT=9005  
> DND_API=https://www.dnd5eapi.co/api

(OBS: this .env file is only an example used when developing localy)

## install all dependancies and start app

After you've created the .env file, run the the following comands in termina:

> yarn install  

or 

> npm install  

followed by:  

> yarn dev  

or  

> npm run dev  

after this you should be able to access this server on: [`localhost:9005/`](#localhost:9005/)
