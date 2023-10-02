FROM node:14
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN cd src
CMD ["node", "routing.js"]
