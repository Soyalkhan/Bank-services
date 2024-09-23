import React, { useState,useEffect } from 'react';
import {Link, NavLink } from 'react-router-dom';
NavLink

const Card = ({ icon, title, description, linkText }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(()=>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth < 768);
        }   

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    return (
        <div className="bg-white shadow-lg cursor-pointer rounded-lg p-6 flex flex-col items-start space-y-4 transform hover:shadow-2xl transition duration-300">
            <div className=' flex gap-6 items-center'>
                {/* Title */}
                <h2 className="text-sm font-bold uppercase">{title}</h2>
                {/* Icon */}
                <div className="text-3xl">
                    {icon}
                </div>
            </div>



            {/* Description */}
            <p className="text-gray-600">{description}</p>
            {/* <p className="text-gray-600 hidden md:block">{description}</p>// hide desc in mob */}


            {/* Link */}
            <Link to="/CustomerDetailsForm" className="text-blue-500 font-semibold hover:underline">
                {linkText} &rarr;
            </Link>
        </div>
    );
};

export default Card;
