/* eslint-disable react/prop-types */
import React from 'react';

import icon from '../assets/images/AboutPage/iconNhay.webp';

const ReviewCard = ({ name, desc, image }) => {
    return (
        <div className="flex gap-11 py-32">
            <div className="w-[13.15rem] h-[13.15rem]">
                <img src={image} alt="img" className="w-full h-full" />
            </div>
            <div className="flex flex-col">
                <div className="w-12 h-12">
                    <img src={icon} alt="icon" className="w-full h-full" />
                </div>
                <span className="mt-3 text-[#555] font-baloo text-2xl leading-9 font-normal max-w-[41.5rem]">
                    {desc}
                </span>
                <span className="text-[#1D1D1D] font-arimo text-xl font-bold leading-normal mt-8">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default ReviewCard;
