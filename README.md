# PERNStack-TODO
 
docker build -f Dockerfile.dev -t aykutmyl/perntodo-client .

docker run -it -p 4002:3000 aykutmyl/perntodo-client


--------------

docker build -f Dockerfile.dev -t aykutmyl/perntodo-server .

docker run -it -p 4003:5000 aykutmyl/perntodo-server

--------------

docker-compose up --build

# TODO

.env dosyası dönüştürülüp eklenecek mi ?