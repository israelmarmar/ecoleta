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
  }
}
