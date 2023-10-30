
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --force

CMD ["npm", "run", "start"]
