import React from 'react';
import ToolCard from '../../cards/ToolCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

const Tools = () => {
    return (
        <>
            <div className='border-b border-[#2CC8B3]'>
                <button className='p-2 bg-[#2CC8B3] text-white font-medium'>Update Tools</button>
            </div>
            <div className='py-4 grid grid-cols-3 gap-2'>
                <ToolCard />
                <ToolCard />
                <ToolCard />
            </div>
            <div className='flex justify-end gap-2'>
                <NavigateBeforeOutlinedIcon  className='border hover:bg-[#2CC8B3] cursor-pointer' fontSize='large'/>
                <NavigateNextIcon className='border hover:bg-[#2CC8B3] cursor-pointer' fontSize='large'/>
            </div>
        </>
    );
};

export default Tools;