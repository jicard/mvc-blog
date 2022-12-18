require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = process.env.db
    ? new Sequelize(process.env.db)
    : new Sequelize(process.env.db_name, process.env.db_user, process.env.db_pw, {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = sequelize;