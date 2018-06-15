// Update with your config settings.
const path = require('path');
const BASE_PATH = path.join(__dirname,'src','server','db');


module.exports = {

  test: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: '172.17.0.2',
      database: 'koa_api_test',
      user: 'knex',
      password: 'knex',
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH,'seeds')
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: '172.17.0.2',
      database: 'koa_api',
      user: 'knex',
      password: 'knex',
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH,'seeds')
    }
  }

};
