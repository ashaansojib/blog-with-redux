import React from 'react';
import { FaArrowRight, FaHome, FaRegEdit, FaRocketchat, FaShareSquare, FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SidebarList = () => {
    return (
        <div className='p-4'>
            <div className='flex gap-2 items-center hover:text-[#2CC8B3] justify-between hover:bg-slate-100 py-2 px-1'>
                <div className='flex gap-2 items-center'>
                    <FaHome />
                    <Link to="/dashboard" className='inline-block text-[16px]'>Dashboard</Link>
                </div>
                <FaArrowRight />
            </div>
            <div className='flex gap-2 items-center hover:text-[#2CC8B3] justify-between hover:bg-slate-100 py-2 px-1'>
                <div className='flex gap-2 items-center'>
                    <FaRegEdit />
                    <Link to="/dashboard/add-posts" className='inline-block text-[16px] '>Publish an Article</Link>
                </div>
                <FaArrowRight />
            </div>
            <div className='flex gap-2 items-center hover:text-[#2CC8B3] justify-between hover:bg-slate-100 py-2 px-1'>
                <div className='flex gap-2 items-center'>
                    <FaRocketchat />
                    <Link to="/dashboard" className='inline-block text-[16px]'>Messages</Link>
                </div>
                <FaArrowRight />
            </div>
            
            <div className='flex gap-2 items-center hover:text-[#2CC8B3] justify-between hover:bg-slate-100 py-2 px-1'>
                <div className='flex gap-2 items-center'>
                    <FaUserEdit />
                    <Link to="/dashboard" className='inline-block text-[16px]'>Profile</Link>
                </div>
                <FaArrowRight />
            </div>
            <div className='flex gap-2 items-center hover:text-[#2CC8B3] justify-between hover:bg-slate-100 py-2 px-1'>
                <div className='flex gap-2 items-center'>
                    <FaShareSquare />
                    <Link to="/dashboard" className='inline-block text-[16px]'>Widgets</Link>
                </div>
                <FaArrowRight />
            </div>
            <div className='flex gap-2 items-center hover:text-[#2CC8B3] justify-between hover:bg-slate-100 py-2 px-1'>
                <div className='flex gap-2 items-center'>
                    <FaShareSquare />
                    <Link to="/dashboard" className='inline-block text-[16px]'>Logout</Link>
                </div>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default SidebarList;