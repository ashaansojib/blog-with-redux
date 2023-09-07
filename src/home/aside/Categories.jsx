import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div>
            <div className='border-b'>
                <button className='p-2 bg-slate-800 text-white font-medium'>Categories</button>
            </div>
            <div className='py-2'>
                <Link className='cat-btn'>Iphone</Link>
                <Link className='cat-btn'>Mobile</Link>
                <Link className='cat-btn'>KDS</Link>
                <Link className='cat-btn'>Tool</Link>
                <Link className='cat-btn'>International</Link>
                <Link className='cat-btn'>Iphone</Link>
                <Link className='cat-btn'>Laptop</Link>
                <Link className='cat-btn'>Front-end</Link>
                <Link className='cat-btn'>Iphone</Link>
            </div>
        </div>
    );
};

export default Categories;