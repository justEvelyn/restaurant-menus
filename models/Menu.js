const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// TODOcreate a Menu model


const Menu = db.define('menu', {

    title: {
        type: DataTypes.STRING

    },
   
})


module.exports = {Menu};