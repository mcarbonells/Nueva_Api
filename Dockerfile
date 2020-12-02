FROM node:latest
WORKDIR /usr/src/app/api

COPY package*.json /usr/src/app/api/
COPY .babelrc /usr/src/app/api/
RUN npm install

COPY . /usr/src/app/api/

RUN npm run build

EXPOSE 5000
EXPOSE 2001
EXPOSE 2002
EXPOSE 2003
EXPOSE 2004
EXPOSE 2005
EXPOSE 2006
EXPOSE 2007
EXPOSE 2008

CMD npm run start