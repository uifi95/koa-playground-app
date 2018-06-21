const {sequelize} = require("../setup-db");
const Sequelize = require('sequelize');

let User = sequelize.define('user',  {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: Sequelize.STRING,
    username: Sequelize.STRING
});

module.exports = { User };