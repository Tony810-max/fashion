import React from 'react';

import imgBanner from '../../../assets/images/HomePage/banner.webp';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const BannerSection = () => {
    return (
        <div className="relative min-h-[calc(100vh-94px)]">
            <img src={imgBanner} alt="" className="absolute z-0 w-full h-full object-cover" />
            <div className="absolute flex flex-col z-10 right-1/2 translate-x-1/2 md:translate-x-0 md:right-[6.5rem] top-1/2 -translate-y-1/2">
                <span className="max-w-[25rem] md:max-w-[30.75rem] text-white font-lato text-center text-3xl md:text-5xl leading-[3rem] uppercase">
                    stylist picks beat the heat
                </span>
                <Link to={'/'} className="mt-12 flex justify-center">
                    <Button
                        variant="outlined"
                        className="py-5 px-6 md:px-9 border-4 border-white w-fit  text-white font-lato text-lg md:text-xl font-bold leading-[1.3rem] uppercase"
                    >
                        shop now
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default BannerSection;
