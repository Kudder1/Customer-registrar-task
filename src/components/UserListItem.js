import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

export default function UserListItem({ user: {name, surname, registerDate} }) {
    const formattedRegisterDate = new Date(registerDate).toLocaleDateString('ru-RU')
    return (
        <TableRow>
            <TableCell scope="row">{name} {surname}</TableCell>
            <TableCell align="right">{formattedRegisterDate}</TableCell>
        </TableRow>
    )
}
