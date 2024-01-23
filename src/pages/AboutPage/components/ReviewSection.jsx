import React from 'react';
import ReviewCard from '../../../components/ReviewCard';

import review1 from '../../../assets/images/AboutPage/review1.webp';
import review2 from '../../../assets/images/AboutPage/review2.webp';
import review3 from '../../../assets/images/AboutPage/review3.webp';

const ReviewSection = () => {
    return (
        <div className="min-h-screen flex justify-center mt-[5.25rem]">
            <div className="container flex flex-col items-center">
                <span className="text-[#1D1D1D] text-center font-arimo text-4xl font-bold leading-[3rem]">
                    Testimonialss
                </span>
                {DATA_REVIEW.map(itemp => (
                    <ReviewCard
                        key={itemp.id}
                        image={itemp.image}
                        desc={itemp.desc}
                        name={itemp.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;

const DATA_REVIEW = [
    {
        id: 1,
        name: 'Stacy',
        desc: 'Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.',
        image: review1,
    },
    {
        id: 2,
        name: 'Tiffany',
        desc: 'I ordered 5 shirts from them and received them in no time. The customer support was awesome!',
        image: review2,
    },
    {
        id: 3,
        name: 'James',
        desc: 'I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.',
        image: review3,
    },
];
