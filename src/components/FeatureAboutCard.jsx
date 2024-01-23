/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import React from 'react';

const FeatureAboutCard = ({ image }) => {
    return (
        <div className="relative h-full">
            <img src={image} alt="" className="" />
            <Button
                variant="outlined"
                className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 text-[#14517B] text-center font-lato text-2xl font-normal leading-5 uppercase py-[0.9rem] px-9 rounded-[1.65rem] bg-white border-none "
            >
                buy now
            </Button>
        </div>
    );
};

export default FeatureAboutCard;
