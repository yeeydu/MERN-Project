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

    const createStudent = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5500/students', student)
        .then(() => {
            window.location.reload(false);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <div className={classes.form}>
                <h2 className={classes.createHeading}>Create Student</h2>
                <form className={classes.root} noValidate autoComplete='off'>
                    <TextField id="outlined-basic" label="Registration Nº" variant="outlined" value={student.regNo} onChange={(e) => { setStudent({ ...student, regNo: e.target.value }) }} />
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={student.name} onChange={(e) => { setStudent({ ...student, name: e.target.value }) }} />
                    <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(e) => { setStudent({ ...student, grade: e.target.value }) }} />
                    <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(e) => { setStudent({ ...student, section: e.target.value }) }} />
                </form>
                <Button variant="contained"
                    onClick={(e) => {
                        createStudent(e)
                    }}>
                    Create
                </Button>
            </div>
        </>
    );
}