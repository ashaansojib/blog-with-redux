import React from 'react';
import { FaClock, FaEnvelope, FaFacebookF, FaLinkedinIn, FaLocationArrow, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'

const FooterHead = () => {
    return (
        <div className='bg-[#151515]'>
            <div className="my-container grid grid-cols-4 gap-3 justify-between py-4">
                <div>
                    <span className='text-white font-medium text-2xl border-b '>About US</span>
                    <div className='text-[14px] text-slate-200 py-3'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis consequatur blanditiis totam earum alias illum eius aliquam dicta nostrum! Ex dolorum animi, similique rerum eius atque facere quia itaque cum!</p>
                    </div>
                    <div className='pt-2 flex gap-2'>
                        <FaFacebookF className='text-4xl text-white border p-1' />
                        <FaTwitter className='text-4xl text-white border p-1' />
                        <FaLinkedinIn className='text-4xl text-white border p-1' />
                        <FaYoutube className='text-4xl text-white border p-1' />
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
                    <span className='text-white font-medium text-2xl border-b '>About US</span>
                    <div className='text-[14px] text-slate-200 py-3'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis consequatur blanditiis totam earum alias illum eius aliquam dicta nostrum! Ex dolorum animi, similique rerum eius atque facere quia itaque cum!</p>
                    </div>
                    <div className='pt-2 flex gap-2'>
                        <FaFacebookF className='text-4xl text-white border p-1' />
                        <FaTwitter className='text-4xl text-white border p-1' />
                        <FaLinkedinIn className='text-4xl text-white border p-1' />
                        <FaYoutube className='text-4xl text-white border p-1' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterHead;