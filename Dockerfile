FROM node:18

RUN apt-get update && apt-get install -y netcat-traditional

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["sh", "-c", "while ! nc -z mysql 3306; do sleep 1; done; npx sequelize-cli db:migrate && node src/app.js"]
