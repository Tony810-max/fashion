/* eslint-disable react/prop-types */
import React from 'react';

const FeatureCard = ({ name, desc, Icon }) => {
    return (
        <div className="flex w-full gap-4">
            <div className="h-11 w-11">
                <Icon color="#024E82" size={44} />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-[#1D1D1D] font-baloo text-base font-normal leading-normal uppercase">
                    {name}
                </span>
                <span className="text-[#555] font-lato text-base leading-normal font-normal">
                    {desc}
                </span>
            </div>
        </div>
    );
};

export default FeatureCard;
