import React from 'react';

import imgWoman from '../../../../assets/images/AboutPage/girBuy.webp';
import imgMan from '../../../../assets/images/AboutPage/manBuy.webp';
import founder1 from '../../../../assets/images/AboutPage/founder-1.webp';
import FeatureAboutCard from '../../../../components/FeatureAboutCard';
import FounderCard from '../../../../components/FounderCard';

const FeatureSection = () => {
    return (
        <div className="mt-[5.5rem] flex justify-center">
            <div className="container">
                <div className="flex justify-center gap-10">
                    <FeatureAboutCard image={imgWoman} />
                    <FeatureAboutCard image={imgMan} />
                </div>
                <div className="py-28 flex flex-col items-center">
                    <span className="text-[#1D1D1D] text-center font-arimo text-4xl font-bold leading-[3rem]">
                        The Founders
                    </span>
                    <div className="mt-28 flex gap-5">
                        {DATA_FOUNDER.map(founder => (
                            <FounderCard
                                key={founder.id}
                                name={founder.name}
                                image={founder.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;

const DATA_FOUNDER = [
    {
        id: 1,
        name: 'HM Jawad',
        image: founder1,
    },
    {
        id: 2,
        name: 'Furqan Abid',
        image: founder1,
    },
    {
        id: 3,
        name: 'Abdullah Ah',
        image: founder1,
    },
    {
        id: 4,
        name: 'Abrar Khan',
        image: founder1,
    },
];
