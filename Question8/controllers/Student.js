const students = require('../models/studentSchema');

const getStudents = (req, res) => {
    students.find((err, students) =>{
    if(err){
        res.send(err);
    }
    res.json(students);
   })
}

const createStudent = (req, res) => {
    const student = new students({
        name : req.body.name,
        address : req.body.address,
    })
    student.save((err, student) => {
        if (err) {
            res.send(err);
        }
        res.json(student);
    })
}

const updateStudent = (req, res) => {
    students.findOneAndUpdate(
        {
            _id : req.params.id,
        },
        {
            $set: {
                name : req.body.name,
                address : req.body.address
            }
        },
        {new : true},(err, students) => {
            if(err){
                res.send(err);
            }
            else{
                res.json(students);
            }
        }
    )
}

const deleteStudent = (req, res) => {
    students.deleteOne({_id : req.params.id})
    .then(()=>res.json({message : "Student id deleted"}))
    .catch((err) => res.send(err));
}


module.exports ={
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
}