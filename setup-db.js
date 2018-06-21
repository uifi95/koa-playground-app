
const Sequelize = require('sequelize');
let sequelize = new Sequelize('database', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    insecureAuth: true
});

module.exports = {
    sequelize
};