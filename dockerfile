FROM node:21.0.0

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["node","app.js"]
EXPOSE 3415