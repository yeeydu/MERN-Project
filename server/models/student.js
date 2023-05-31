import mongoose from "mongoose";

// student database type schema
const studentSchema = mongoose.Schema({
    regNo: Number,
    name: String,
    grade: String,
    section:{
        type: String,
        default: 'A'
    },
});

// model student - schema
const student = mongoose.model('student', studentSchema);

export default student;