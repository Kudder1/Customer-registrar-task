import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import UserListItem from './UserListItem';

const addBtnStyle = {
    position: 'fixed',
    right: '30px',
    bottom: '30px',
}

export default function List({ users }) {
    return (
        <>
            <Fab style={addBtnStyle} component={Link} color="primary" aria-label="add" to={`/register`}>
                <AddIcon/>
            </Fab>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell align="right">Register Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <UserListItem key={user.id} user={user}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
