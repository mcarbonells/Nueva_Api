FROM node:latest
WORKDIR /usr/src/app/api
COPY package*.json /usr/src/app/api/
COPY .babelrc /usr/src/app/api/

RUN npm install

COPY . /usr/src/app/api/

RUN npm run build

EXPOSE 5000
EXPOSE 2003

CMD npm run start