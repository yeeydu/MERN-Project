import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function ShowStudent() {

    const [studentsList, setStudentsList] = useState([]);

    const deleteStudent = (id) =>{
        axios.delete(`http://localhost:5500/students/${id}`).then(()=>{
            window.location.reload(false);
        })
    }

    useEffect(() => {
        axios.get('http://localhost:5500/students')
            .then((allStudents) => {
                setStudentsList(allStudents.data);
            })
    }, [])

    console.log(studentsList);
    return (
        <>
            <h2>All Students</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Grade</TableCell>
                            <TableCell >Section </TableCell>
                            <TableCell >Reg. Nº </TableCell>
                            <TableCell >Action </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsList.map((student, key) => (
                            <TableRow key={key} >
                                <TableCell component="th">{student.name}</TableCell>
                                <TableCell align="right">{student.grade}</TableCell>
                                <TableCell align="right">{student.sction}</TableCell>
                                <TableCell align="right">{student.regNo}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" size="small" onCanPlay={() => deleteStudent(student._id)} >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}