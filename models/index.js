const config = require("../config/config");
const { Sequelize, DataTypes } = require("sequelize");

// DataBase Connection
const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: 0,
    port: 6600,

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("./Student")(sequelize, Sequelize, DataTypes);
db.admin = require("./Admin.js")(sequelize, Sequelize, DataTypes);
db.donation = require("./Donation")(sequelize, Sequelize, DataTypes);
db.school = require("./School.js")(sequelize, Sequelize, DataTypes);

/**
/------------------------------------
/ Relationships 
/-------------------------------------
*/
// Adds relationsship between school and students
db.student.belongsTo(db.school, {
  foreignKey: {
    name: "school_id",
  },
});
db.school.hasMany(db.student);

// Adds relationsship between donation and students schools
db.donation.belongsTo(db.school, {
  foreignKey: {
    name: "school_id",
  },
});
db.donation.belongsTo(db.student, {
  foreignKey: {
    name: "student_id",
  },
});

/**
/------------------------------------
/ End of Relationships 
/-------------------------------------
*/
module.exports = db;
