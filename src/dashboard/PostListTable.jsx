import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const PostListTable = () => {
    return (
        <TableContainer className='mt-3 border'>
            <Table aria-label="simple table">
                <TableHead className='p-4'>
                    <TableRow>
                        <TableCell className='uppercase' >BASIC INFO</TableCell>
                        <TableCell className='uppercase' align="center">Date</TableCell>
                        <TableCell className='uppercase' align="center">Tags</TableCell>
                        <TableCell className='uppercase' align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell align="center">name</TableCell>
                        <TableCell align="center">pront</TableCell>
                        <TableCell align="center">java</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PostListTable;