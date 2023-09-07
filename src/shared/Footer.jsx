import React from 'react';
import { Link } from 'react-router-dom';
import FooterHead from './FooterHead';

const Footer = () => {
    return (
        <>
        <FooterHead />
        <footer className='p-3 bg-[#18242C] text-slate-200'>
            <div className="my-container flex justify-between items-center">
                <p className='text-sm'>All Rights are Reserved @2023 | Develop By Sojib</p>
                <div>
                    <Link className='footer-link' to="/">Home |</Link>
                    <Link className='footer-link' to="/about">About |</Link>
                    <Link className='footer-link' to="/about">Privacy Policy</Link>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;