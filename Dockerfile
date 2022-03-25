FROM node:12-slim

WORKDIR /opt/backend

COPY . /opt/backend
RUN npm install 
RUN npm install cross-env --save-dev
RUN npm install nodemon -g

CMD ["npm", "run", "dev"] 