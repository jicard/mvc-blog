const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new Sequelize(
    process.env.db_name, 
    process.env.db_user, 
    process.env.db_pw,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
)
module.exports = sequelize;