/* eslint-disable react/prop-types */
import React from 'react';

const FounderCard = ({ name, image }) => {
    return (
        <div className="flex flex-col">
            <img src={image} alt="imgFounder" className="" />
            <span className="text-[#1D1D1D] font-arimo font-bold leading-normal py-8">{name}</span>
        </div>
    );
};

export default FounderCard;
