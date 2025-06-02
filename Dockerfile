FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

ENV DATABASE_URL=postgresql://postgres:yourpassword@postgres:5432/postgres

COPY ./prisma ./prisma
RUN npx prisma generate 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
