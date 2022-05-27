FROM node:18-alpine3.14 

COPY package.json .

COPY . .

EXPOSE 3000


