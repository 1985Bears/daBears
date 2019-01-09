// dotenv implemented
// requires .sequelizerc to let sequellize know that it should be looking for config.js rather than config.json


module.exports = {

  "development": {
    "username": process.env.JAWSDB_USER,
    "password": process.env.JAWSDB_PASS,
    "database": process.env.JAWSDB_NAME,
    "host": process.env.JAWSDB_HOST,
    "port": 3306,
    "dialect": "mysql",


    "migrationStorage": "json",
    "migrationStoragePath": "seeds.json",
    "migrationStorageTableName": "sequelize_meta"

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "username": process.env.JAWSDB_USER,
    "password": process.env.JAWSDB_PASS,
    "database": process.env.JAWSDB_NAME,
    "host": process.env.JAWSDB_HOST,
    "port": 3306,
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}