const db = require('./database');
const { Student, Campus} = require('./models/school')
const seed = require("../../seed")


Student.belongsTo(Campus);
Campus.hasMany(Student);


module.exports = {
    db,
    seed,
    Student,
    Campus
}
