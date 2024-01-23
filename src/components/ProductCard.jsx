/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../types/routes';

const ProductCard = ({ name, image, price, id }) => {
    return (
        <Link to={`${ROUTES.PRODUCT}?id=${id}`} className="flex flex-col gap-4">
            <img src={image} alt="product" className="h-full" />
            <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-[#1D1D1D] text-center font-baloo text-base font-normal leading-normal max-w-full truncate">
                    {name}
                </span>
                <span className="text-[#024E82] text-center font-lato text-base font-normal leading-normal">
                    {Number(price).toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;
