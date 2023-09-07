import { Avatar, Button, Switch } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <nav className='px-2 py-4 border-b border-slate-100'>
            <div className='my-container grid items-center justify-between grid-cols-3'>
                <Link to="/"><h2 className='text-2xl font-semibold'>Software Blog</h2></Link>
                <div className='col-span-2 flex justify-end items-center gap-4'>
                    <div className='flex gap-3 items-center'>
                        <input className='p-2 border inline-block border-slate-200 rounded-lg' type="text" name="" id="" placeholder='Search Your Software' />
                        <Link to="/tools"><Button variant="text">Tools</Button></Link>
                        <Link to="/"><Button variant="text">Help Center</Button></Link>
                        <Switch {...label} defaultChecked />
                    </div>
                    <Avatar alt="Remy Sharp" src="/vite.svg" />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;