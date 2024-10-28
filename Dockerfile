FROM node:20.18
RUN mkdir /home/express
WORKDIR /home/express
COPY package.json package-lock.json* /home/express/
RUN npm install
COPY . /home/express
EXPOSE 3000
CMD ["npm", "start"]