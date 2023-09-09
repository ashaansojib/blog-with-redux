import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = () => {
    return (
        <div>
            <div className='img-parent relative'>
                <img className='image-control' src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/95-696x464.jpg" alt="" />
                <button className='p-1 text-sm absolute top-2 left-2 bg-[#2CC8B3] text-white'>Category</button>
            </div>
            <Link className='text-xl font-semibold'>Download Oppo A53 (2020) Updates</Link>
        </div>
    );
};

export default ToolCard;