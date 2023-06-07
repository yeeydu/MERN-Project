import express  from "express";
import { getStudents, createStudent, deleteStudent, updateStudent, getStudent } from "../controllers/student.js";
import student from "../models/student.js";
//const student = require('../model/student.js');

const router = express.Router();

//      path - callback func from controller
router.get('/', getStudents);
router.post('/', createStudent);
router.get('/update/:id', getStudent);
router.put('/update/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;