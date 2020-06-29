require('dotenv').config(); 

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,

  /** DATABASE */
    db: {
        DB_HOST: 'localhost',
        DB_USER: 'root',
        DB_PASS:'changeMe', 
        DB_NAME: 'schooldono',
        dialect: "mysql",

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }
    },

  /** AUTH KEY */
    auth: {
        secret: "our-secret-key"
    }
};

