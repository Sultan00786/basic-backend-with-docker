## Manual installation

- Install node.js and npm from [node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)
- Clone the repository `git clone https://github.com/username/your-repo.git`
- Install all dependencies by running `npm install`
- Install docker from [docker](https://www.docker.com/get-started)
- Start Postgress Db locally using docker
  - Run `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres`
- Add this `DATABASE_URL = postgresql://postgres:yourpassword@localhost:5432/postgres
postgers url in`.env file
- Run `npm run dev`

## Installation using DockekrFile

- Install docker from [docker](https://www.docker.com/get-started)
- Create new docker network
  - Run `docker network create network_name`
- Start Postgress Db locally using docker
  - Run `docker run --name postgres -e POSTGRES_PASSWORD=yourpassword --network network_name -d -p 5432:5432 postgres`
- Build the docker image
  - by running `docker build --network=host -t your-repo .`
  - `--network=host` will allow you to access the host's port
- Start container
  - Run `docker run -e DATABASE_URL=postgresql://postgres:yourpassword@postgres:5432/postgres --network network_name -p 3000:3000 your-repo`

## Installation using docker-compose.yml

- Install docker from [docker](https://www.docker.com/get-started)
- Run `docker compose up`
