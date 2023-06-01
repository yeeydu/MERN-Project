import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from '../../styles.js';
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateStudent() {

    const classes = useStyles();

    const [student, setStudent] = useState({
        regNo: 0,
        name: "",
        grade: "",
        section: "",
    });

    const createStudent = () => {
        axios.post('http://localhost:5500/students', student)
            .then(() => {
                window.location.reload(false);
            })
    }

    return (
        <>
            <h2>Create Student</h2>
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField id="regNo" label="Registration Nº" variant="outlined" value={student.regNo} onChange={(event) => { setStudent({ ...student, regNo: event.target.value }) }} />
                <TextField id="name" label="Name" variant="outlined" value={student.name} onChange={(event) => { setStudent({ ...student, name: event.target.value }) }} />
                <TextField id="grade" label="Grade" variant="outlined" value={student.grade} onChange={(event) => { setStudent({ ...student, grade: event.target.value }) }} />
                <TextField id="section" label="Section" variant="outlined" value={student.section} onChange={(event) => { setStudent({ ...student, section: event.target.value }) }} />
            </form>
            <Button variant="contained"
                onClick={(e) => { 
                createStudent()
                e.preventDefault()
                }}>
                Create
            </Button>
        </>
    );
}