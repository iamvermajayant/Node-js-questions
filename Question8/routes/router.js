const express = require('express');
const router = express.Router();
const {getStudents, createStudent, updateStudent, deleteStudent} = require('../controllers/Student');


router.route('/students').get(getStudents);
router.route('/students').post(createStudent);
router.route('/students/:id').delete(deleteStudent);
router.route('/students/:id').put(updateStudent);


router.get('/', (req, res)=>{
    res.send("Let's build crud API")
});

module.exports = router;