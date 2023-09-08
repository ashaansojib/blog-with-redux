import React from 'react';
import { FaArrowRight, FaClock, FaEnvelope, FaFacebookF, FaLinkedinIn, FaLocationArrow, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const FooterHead = () => {
    return (
        <div className='bg-[#151515]'>
            <div className="my-container grid grid-cols-3 gap-4 justify-between py-8">
                <div>
                    <span className='text-white font-medium text-2xl border-b '>About US</span>
                    <div className='text-[14px] text-slate-200 py-3'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis consequatur blanditiis totam earum alias illum eius aliquam dicta nostrum! Ex dolorum animi, similique rerum eius atque facere quia itaque cum!</p>
                    </div>
                    <div className='pt-2 flex gap-2'>
                        <FaFacebookF className='footer-icon' />
                        <FaTwitter className='footer-icon' />
                        <FaLinkedinIn className='footer-icon' />
                        <FaYoutube className='footer-icon' />
                    </div>
                </div>
                <div>
                    <span className='text-white font-medium text-2xl border-b '>Get In Touch</span>
                    <div className='py-3 flex gap-2'>
                        <FaLocationArrow className='text-2xl text-white' />
                        <span className='text-gray-300'>Dhaka - 1203. DMC More, Bangladesh</span>
                    </div>
                    <div className='flex gap-2'>
                        <FaEnvelope className='text-2xl text-white' />
                        <span className='text-gray-300'>ashaansoji.hr@gmail.com</span>
                    </div>
                    <div className='py-3 flex gap-2'>
                        <FaPhoneAlt className='text-2xl text-white' />
                        <span className='text-gray-300'>+88028926374</span>
                    </div>
                    <div className='flex gap-2'>
                        <FaClock className='text-2xl text-white' />
                        <span className='text-gray-300'>Mon - Friday, 9.30AM - 6.00PM</span>
                    </div>
                </div>
                <div>
                    <span className='text-white font-medium text-2xl border-b '>Usefull Links</span>
                    <div className='py-3 text-slate-200'>
                        <div className='flex items-center gap-2'>
                            <FaArrowRight />
                            <Link className='hover:underline hover:text-green-600'>How to manage this website?</Link>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaArrowRight />
                            <Link className='hover:underline hover:text-green-600'>Instruction Documents</Link>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaArrowRight />
                            <Link className='hover:underline hover:text-green-600'>Read more about our policy.</Link>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaArrowRight />
                            <Link className='hover:underline hover:text-green-600'>Where you can find initial files</Link>
                        </div>
                        
                        
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterHead;