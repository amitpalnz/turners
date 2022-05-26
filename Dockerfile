FROM node:18-alpine3.14 

COPY . .

EXPOSE 4000


CMD ["nodemon", "index.js"]

