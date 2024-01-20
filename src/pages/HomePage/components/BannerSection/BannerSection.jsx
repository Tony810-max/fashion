import React from 'react';

import imgBanner from '../../../../assets/images/HomePage/banner.webp';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const BannerSection = () => {
    return (
        <div className="relative ">
            <img src={imgBanner} alt="" className="absolute z-0 w-full" />
            <div className="absolute flex flex-col z-30 right-[6.5rem] ">
                <span className=" font-lato-sans-serif text-center text-5xl leading-[3rem] uppercase">
                    stylist picks beat the heat
                </span>
                <Link to={'/'} className="w-fit">
                    <Button className="text-[#fff] bg-black">shop now</Button>
                </Link>
            </div>
        </div>
    );
};

export default BannerSection;
