const { Student, Campus } = require('../models/school');
const router = require('express').Router();

// grabs all 
router.get('/', async (req,res,next)=>{
    try{
        const schools = await Campus.findAll();
        const students = await Student.findAll({
            where: req.query,
            include: [Campus]
        });
        res.send([...schools, ...students]);
    }catch(e){
        next(e)
    }
})

// grabs all students
router.get('/students', async (req,res,next)=>{
    try{
        const students = await Student.findAll();
        res.send(students);
    }catch(e){
        next(e)
    }
})

//grabs student by id
router.get('/students/:id', async (req,res,next)=>{
    try{
        const student = await Student.findByPk(req.params.id, {
            include: Campus
        })
        res.send(student)
    }catch(e){
        next(e)
    }
})

// grabs all campuses
router.get('/campuses', async (req,res,next)=>{
    try{
        const campuses = await Campus.findAll();
        res.send(campuses);
    }catch(e){
        next(e)
    }
})

//grabs campus by id
router.get('/campuses/:id', async (req,res,next)=>{
    try{
        const campus = await Campus.findByPk(req.params.id)
        res.send(campus)
    }catch(e){
        next(e)
    }
})

module.exports = router;