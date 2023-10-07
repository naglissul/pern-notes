FROM node:14
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "src/routing.js"]
