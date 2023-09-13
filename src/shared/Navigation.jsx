import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy';
import { Avatar, Button, Switch } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utils/AuthProvider';

const Navigation = () => {
    // user area
    const {logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <nav className='px-2 py-4 border-b border-slate-100'>
            <div className='my-container grid items-center justify-between grid-cols-3'>
                <Link to="/"><h2 className='text-2xl font-semibold'>Software Blog</h2></Link>
                <div className='col-span-2 flex justify-end items-center gap-4'>
                    <div className='flex gap-3 items-center'>
                        <input className='p-2 border inline-block border-slate-200 rounded-lg' type="text" name="" id="" placeholder='Search Your Software' />
                        <Switch {...label} defaultChecked />
                        <Link to="/tools"><Button variant="text">Tools</Button></Link>
                        <Link to="/"><Button variant="text">Help Center</Button></Link>
                    </div>
                    <div>
                        {/* <Avatar alt="Remy Sharp" /> */}
                        <Dropdown>
                            <MenuButton>Dashboard</MenuButton>
                            <Menu>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem><Link to="/dashboard">Dashboard</Link></MenuItem>
                                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                            </Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;