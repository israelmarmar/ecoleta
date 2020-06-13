const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "dist", "database", "database.sqlite")
    },
    migrations: {
      directory: path.resolve(__dirname, 'dist', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'dist', 'database', 'seeds')
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.resolve(__dirname, 'dist', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'dist', 'database', 'seeds')
    },
    useNullAsDefault: true
  }
}
