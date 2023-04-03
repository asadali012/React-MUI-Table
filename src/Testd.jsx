import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'


const Testd = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => setTableData(data));
    }, []);

    return (
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label='simple-table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>F. Name</TableCell>
                        <TableCell>L. Name</TableCell>
                        <TableCell>E mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default Testd