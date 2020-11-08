FROM node:latest
WORKDIR /usr/src/app/api

COPY package*.json /usr/src/app/api/
COPY .babelrc /usr/src/app/api/
RUN npm install

COPY . /usr/src/app/api/
RUN npm run build

EXPOSE 5000
EXPOSE 5001
EXPOSE 5002
EXPOSE 5003
EXPOSE 5004
EXPOSE 5005
EXPOSE 5006
EXPOSE 5007

CMD npm run start