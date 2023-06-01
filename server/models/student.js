import mongoose from "mongoose";

// student database type schema
const studentSchema = mongoose.Schema({
    regNo: Number,
    name: String,
    grade: String,
    section:  String,
});

// model student - schema
const studentData = mongoose.model('student', studentSchema);

export default studentData;