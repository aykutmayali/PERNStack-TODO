# PERNStack-TODO
 
docker build -f Dockerfile.dev -t aykutmyl/perntodo-client .

docker run -it -p 4002:3000 aykutmyl/perntodo-client


--------------

docker build -f Dockerfile.dev -t aykutmyl/perntodo-server .

docker run -it -p 4003:5000 aykutmyl/perntodo-server

docker build -t your_dockerhub_username/nodejs-image-demo .

docker build -t 3702670/perntodo-server .

docker run --name nodejs-image-demo -p 80:8080 -d your_dockerhub_username/nodejs-image-demo
docker run --name perntodo-server -p 4003:5000 -d 3702670/perntodo-server


--------------

docker-compose up --build

# TODO

.env dosyası dönüştürülüp eklenecek mi ?


# Docker-React-Node-Express-Postgres (CRUD)

## Components ##
	- Docker
	- React
	- Nodejs (Express Framework)
	- Postgres

## Front-end components ##
    - React


## Server components ##
	- CRUD
	- Database:
		- Postgres

## Useful Docker commands ##
	- docker-compose up (run the services)
	- docker-compose up -d (run the services in the background)
	- docker ps (list the containers are running)
	- docker logs id_container (see the logs of a container)
	- docker start/stop id_container (start/stop a container)

## Steps while setting up the projects ## 
    - for server:
		- npm init
		- npm i express pg cors
		- nodemon index (in server path)

	- for client:
		- npx create-react-app client
		- yarn start (in client path)