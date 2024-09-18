import React from 'react';
import bannerImage from '../images/banner.jpg'; // Adjust the path as needed

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center p-16 border-b-4">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <img
                    src={bannerImage}
                    alt="Banner"
                    className="w-90 h-auto object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-24 ">
                <h1 className="text-4xl text-[#3a3ee5] font-bold mb-4">Your Credit Score & Repor <span className='text-[#d90368]'>Abouslety Free</span></h1>
                <p className="text-sm text-[#8d9297]">Your credit score is more than just a number. It’s the key to help you unlock the doors to the best loans & credit card offers available</p>
            <button className='bg-[#1b1dc7] text-white rounded w-56 p-2 mt-3 shadow-sm'>Get Free Credit Report </button>
            </div>
        </div>
    );
};

export default Banner;
