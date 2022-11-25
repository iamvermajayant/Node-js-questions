const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true,
    },
    address : {
        type : 'string',
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    }
});

module.exports = mongoose.model('students', studentSchema);