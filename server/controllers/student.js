import StudentData from "../models/student.js";

export const getStudents = async (req, res) => {
    try { // find all student .find()
        const allstudents = await StudentData.find();

        res.status(200).json(allstudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createStudent = async (req, res) => {
    const student = req.body;
    //                     module  variable
    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//MERN DATA MOVES AS JSON 