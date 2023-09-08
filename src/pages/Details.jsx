import React from 'react';
import Aside from '../home/aside/Aside';
import Breadcrumbs from '../components/Breadcrumbs';
import { Button } from '@mui/material';

const Details = () => {

    return (
        <div className='my-container py-8'>
            <div className="grid grid-cols-3 gap-4">
                <div className='col-span-2 border p-3'>
                    <h2 className='text-3xl font-bold'>How to Download Oppo A33 2023 Update Firmware | Posted by Sojib</h2>

                    {/* breadcrumbs */}
                    <Breadcrumbs />

                    <p className='py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, asperiores. Rerum, ipsam facilis in quis atque voluptatum qui facere repellat ducimus iure ratione, ex expedita itaque impedit hic ab nesciunt?</p>

                    <img src="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg" alt="" />

                    <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore velit quos optio ad reiciendis quaerat. Accusantium possimus, amet ea optio nostrum sint voluptatum fugiat recusandae expedita laudantium aliquid saepe quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi eius pariatur hic numquam animi. Cumque iste officiis nobis aut, rem, modi voluptatem qui a, sunt adipisci ullam id sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos magnam eos atque. Et ratione autem ex totam repellendus quisquam consequuntur nostrum doloremque molestiae facere. Ea nisi cupiditate tempora laborum quos?</p>

                    <div className='py-3'>
                        <h3 className='font-medium text-xl'>How To Control Compromise?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia pariatur asperiores facere aspernatur reprehenderit perspiciatis, sapiente hic odio itaque illo natus possimus ab facilis nobis? Doloribus dicta adipisci blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi sed, tempore doloribus neque accusantium laborum ab excepturi reiciendis, quos illo quis delectus nihil incidunt, suscipit quas aut porro veniam!</p>
                    </div>
                    <div className='py-3'>
                        <h3 className='font-medium text-xl'>What promt Key in Programming?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia pariatur asperiores facere aspernatur reprehenderit perspiciatis, sapiente hic odio itaque illo natus possimus ab facilis nobis? Doloribus dicta adipisci blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi sed, tempore doloribus neque accusantium laborum ab excepturi reiciendis, quos illo quis delectus nihil incidunt, suscipit quas aut porro veniam!</p>
                    </div>
                    <div className='py-3'>
                        <h3 className='font-medium text-xl'>Some steps to Success in Development!</h3>
                        <li className='list-inside'>Lorem ipsum dolor sitconsectetur adipisicing elit. Ipsum, optio?</li>
                        <li className='list-inside'>Lorem ipsum dolo consectetur adipisicing elit. Ipsum, optio?</li>
                        <li className='list-inside'>Lorem ipsum dolor nsectetur adipisicing elit. Ipsum, optio?</li>
                        <li className='list-inside'>Lorem ipsum dot consectetur adipisicing elit. Ipsum, optio?</li>
                        <li className='list-inside'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio?</li>
                    </div>
                    {/* Post data by table */}
                    <div className='flex justify-center'>

                    <Button variant="outlined" size="medium">
                        Download Files
                    </Button>
                    </div>
                </div>
                <Aside />
            </div>
        </div>
    );
};

export default Details;