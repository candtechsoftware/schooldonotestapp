const config = require('../config/config'); 
const { Sequelize, DataTypes, Op } = require('sequelize');

// DataBase Connection
const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: false,
    port: 6600,

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle
    }
  }
);


const db = {};

db.Sequelize = Sequelize; 
db.Op = Op; 
db.sequelize = sequelize; 

db.student = require('./Student')(sequelize, Sequelize, DataTypes);
db.role = require('./Role')(sequelize, Sequelize, DataTypes); 
db.user = require('./User.js')(sequelize, Sequelize, DataTypes);
db.donation = require('./Donation')(sequelize, Sequelize, DataTypes);
db.school = require('./School.js')(sequelize, Sequelize, DataTypes); 
db.teacher = require('./Teacher.js')(sequelize, Sequelize, DataTypes); 

module.exports = db ;
