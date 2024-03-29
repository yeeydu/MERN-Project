import studentData from "../models/student.js";

export const getStudents = async (req, res) => {
    try { // find all student .find()

        const allstudents = await studentData.find();
        res.status(200).json(allstudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createStudent = async (req, res) => {
    try {
        const student = req.body;
        //                     module  variable
        const newStudent = new studentData(student);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteStudent = async (req, res) => {

    const id = req.params.id;
    try {
        await studentData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!');
    } catch (error) {
        console.log(error);
    }
}


export const getStudent = async (req, res) => {
    const id = req.params.id;
    try { // find student .find()

        const student = await studentData.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateStudent = async (req, res) => {

    const id = req.params.id;
    try {
        await studentData.findByIdAndUpdate(id)
        const student = req.body;

        $set: req.body;

        res.send('Successfully Updated!');
    } catch (error) {
        console.log(error);
    }
}

//MERN DATA MOVES AS JSON 