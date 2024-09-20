import React from 'react';
import bannerImage from '../images/banner.jpg'; // Adjust the path as needed

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center p-6 md:p-16 border-b-4 md:gap-40">
            {/* Image Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                    src={bannerImage}
                    alt="Banner"
                    className="w-full h-auto object-cover rounded-md"
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-16 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl text-[#3a3ee5] font-bold mb-4">
                    Your Credit Score & Report <span className='text-[#d90368]'>Absolutely Free</span>
                </h1>
                <p className="text-base md:text-sm text-[#8d9297] mb-4">
                    Your credit score is more than just a number. It’s the key to help you unlock the doors to the best loans & credit card offers available.
                </p>
                <button className='bg-[#1b1dc7] text-white rounded w-full md:w-56 p-2 mt-3 shadow-sm hover:bg-sky-400 border-none hover:text-white hover:ease-in duration-300'>
                    Get Free Credit Report
                </button>
            </div>
        </div>
    );
};

export default Banner;
