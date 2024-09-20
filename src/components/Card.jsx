import React from 'react';

const Card = ({ icon, title, description, linkText }) => {
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

            {/* Link */}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
                {linkText} &rarr;
            </a>
        </div>
    );
};

export default Card;
