import React from 'react';

import bannerImg from '../../../assets/images/ContactPage/bannerContact.webp';

const BannerSection = () => {
    return (
        <div className="relative flex flex-col items-center">
            <img src={bannerImg} alt="imgBanner" className="w-full" />
            <div className="absolute z-10 bottom-[4.4rem] container">
                <span className="text-white font-lato text-5xl font-normal uppercase">
                    contact us
                </span>
            </div>
        </div>
    );
};

export default BannerSection;
