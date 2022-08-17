const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

//  - create a Restaurant model
//must have name, location and cusine


const Restaurant = db.define('resturant', {

    name: {
        type: DataTypes.STRING

    },
    location: {
        type: DataTypes.STRING

    },
    cusine: {
        type: DataTypes.STRING

    },
})

async function main() {
    await Restaurant.sync()

    await Restaurant.create({
        name: 'Mcdonalds',
        location: 'London',
        cusine: 'American'
    }) 
}

module.exports = {Restaurant};