
# express-knex-bolierplate

An Express - Knex query builder boilerplate


## Run Locally

Clone the project

```bash
  git clone https://github.com/dj0nny/express-knex-bolierplate.git
```

Go to the project directory

```bash
  cd express-knex-bolierplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DEV_DB_NAME`

`DEV_DB_USER`

`DEV_DB_PSW`

You can also add your environment variables for the production.
## Knex Configuration

Before running this boilerplate, you need to update your `knexfile.js` located in the root of this project.

```javascript
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.DEV_DB_NAME,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PSW,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
```
For this project, the default database client is MySQL. List of supported clients by Knex: http://knexjs.org/guide/#node-js

You can use multiple configurations based on your Node environment. For example

```javascript
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.DEV_DB_NAME,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PSW,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.PROD_DB_NAME,
      user: process.env.PROD_DB_USER,
      password: process.env.PROD_DB_PSW,
    },
  },
};
```

## Knex migrations and seeds

### Migrations

For generating a new migration:

```bash
  $ knex migrate:make migration_name
```
For running the migration:

```bash
  $ knex migrate:latest

  # You can also pass the --env flag or set NODE_ENV to select an alternative environment

  $ knex migrate:latest --env production
```
### Seed

To create a seed file, run:

```bash
  $ knex seed:make seed_name
```
To run seed files, execute:

```bash
  $ knex seed:run
```

To run specific seed files, execute:

```bash
  $ knex seed:run --specific=seed-filename.js --specific=another-seed-filename.js
```

## API Reference

#### Get all todo

```http
  GET /api/todo
```

#### Get todo

```http
  GET /api/todo/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of todo to fetch |

#### Add todo

```http
  POST /api/todo/
```

Example request body:

```json
  {
    "name": "clean the floor"
  }
```

#### Delete todo

```http
  DELETE /api/todo/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of todo to delete |

#### Update todo

```http
  PUT /api/todo/
```

Example request body:

```json
  {
    "id": 1,
    "name": "clean the floor again"
  }
```
## Tech Stack

Node.js, Express, Knex, MySQL Node.js driver


## Authors

- [@dj0nny](https://github.com/dj0nny/)

