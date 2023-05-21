const Sequelize = require('sequelize')
const db = require('../database');

const Student = db.define('students', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue: ''
    },
    gpa:{
        type: Sequelize.DECIMAL(3, 1),
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    campusId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

const Campus = db.define('campuses', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT('long'),
    }
})

module.exports = { Student, Campus };