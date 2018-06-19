/**
 * Created by Manjesh on 14-05-2016.
 */
const env = process.env.NODE_ENV;
console.log("env " + env);
const dev = {
  app: {
      port: 8082
  },
  sql: {
    database: 'oauth_demo',
    username: 'root',
    password: '',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: true,
    timezone: '+05:30',
  },
  mongo: {
    uri: 'mongodb://192.168.34.10:27017/gloryque_quarc'
  },
  seedDB:true,
  seedMongoDB:true,
  seedDBForce:true,
  db:'mongo' // mongo,sql if you want to use any SQL change dialect above in sql config
};


const prod = {
  app: {
    port: 8080
  },
  sql: {
    database: 'oauth_demo',
    username: 'root',
    password: '',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: true,
    timezone: '+05:30',
  },
  mongo: {
    uri: 'mongodb://mongo:27017/authserver'
  },
  seedDB:true,
  seedMongoDB:true,
  seedDBForce:true,
  db:'mongo' // mongo,sql if you want to use any SQL change dialect above in sql config
};

const config = {
 dev,
 prod
};

module.exports = config[env];