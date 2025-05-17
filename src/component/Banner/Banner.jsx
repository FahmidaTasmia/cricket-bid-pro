import React from 'react';
import banner from '../../assets/bg-shadow.png';
import bannerMain from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='p-20 bg-[#141414] rounded-xl mt-8' style={{ backgroundImage: `url(${banner})` }} >
            <div className='flex justify-center'>
             <img src={bannerMain} alt="" />
            </div>
           
           <div className='text-white mx-auto items-center '>
            <h1 className='font-bold text-4xl mt-5'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h4 className='my-3 text-lg'>Beyond Boundaries Beyond Limits</h4>
            <button className='btn bg-[#bde3a0] text-black btn-sm  border-accent'>Claim Free Credit</button>
           </div>
        </div>
    );
};

export default Banner;