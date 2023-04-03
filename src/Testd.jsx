import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

export default function Testd() {

    const [rows, setRows] = useState([])
    const [price, setPrice] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setRows(data));
    }, []);


    const currency = (price) => {
        if (price <= 50) {
            price = 'USD. ${price}'
        } else {
            price = 'PKR. ${price}'
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', editable: false },
        {
            field: 'title',
            headerName: 'Name',
            width: 300,
            editable: true,
        },
        {
            field: "price",
            headerName: 'Price',
            width: 80,
            editable: false,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 500,
            sortable: false,
            editable: false,
        },
        {
            field: 'image',
            headerName: 'Image',
            type: 'image',
            sortable: false,
            filterable: false,
            renderCell: (params) => <img src={params.value} alt="Product" style={{ border: '1px solid #ddd', width: '90%', height: '90%', objectFit: 'cover' }} />
        }
    ];



    return (
        <>
            <Box sx={{ height: 600, width: '100vw' }}>
                <DataGrid
                    // rows={!rows.price ? rows : { rows."price" > 50 ? USD "price": PKR "price" }}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                // disableRowSelectionOnClick
                />
            </Box>

        </>
    );
}