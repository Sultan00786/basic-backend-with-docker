## Manual installation

- Install node.js and npm from [node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)
- Clone the repository `git clone https://github.com/username/your-repo.git`
- Install all dependencies by running `npm install`
- Start Postgress Db locally using docker
  - Run `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres`
- Add this `DATABASE_URL = postgresql://postgres:yourpassword@localhost:5432/postgres
postgers url in`.env file
- Run `npm run dev`

## Installation using DockekrFile

- Install docker from [docker](https://www.docker.com/get-started)
- Start Postgress Db locally using docker
  - Run `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres`
- Build the docker image
  - by running `docker build . -t your-repo`
- Start container
  - Run `docker run -p 3000:3000 your-repo`

## Installation using docker-compose.yml

- Install docker from [docker](https://www.docker.com/get-started)
- Run `docker compose up -d`
