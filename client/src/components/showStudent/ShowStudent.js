import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStyles from '../../styles.js';
import axios from 'axios';

export default function ShowStudent() {

    const classes = useStyles();

    const [studentsList, setStudentsList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/students')
            .then((allStudents) => {

                setStudentsList(allStudents.data);
            })
    }, [])

    return (
        <>
            <h2>All Students</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Grade</TableCell>
                            <TableCell >Section </TableCell>
                            <TableCell >Reg. Nº </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsList.map((student, index) => (
                            <TableRow key={index} >
                                <TableCell component="th" scope="row">{student.name}</TableCell>
                                <TableCell align="right">{student.grade}</TableCell>
                                <TableCell align="right">{student.sction}</TableCell>
                                <TableCell align="right">{student.regNo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}