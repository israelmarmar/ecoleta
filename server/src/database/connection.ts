import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  useNullAsDefault: true
})

export default connection
