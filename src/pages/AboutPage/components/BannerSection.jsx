import React from 'react';

import bannerImg from '../../../assets/images/AboutPage/banner.webp';

const BannerSection = () => {
    return (
        <div className="flex justify-center relative ">
            <img src={bannerImg} alt="bannerimg" className="w-full h-full " />
            <div className="container absolute bottom-[4.5rem] z-10 w-full">
                <span className="text-white font-lato text-5xl font-normal leading-[3rem] uppercase">
                    About Northstar
                </span>
            </div>
        </div>
    );
};

export default BannerSection;
