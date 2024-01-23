/* eslint-disable react/prop-types */
import { Breadcrumbs, MenuItem, Select, Typography } from '@mui/material';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../../types/routes';

import { Star } from 'lucide-react';

const SELECT_DATA = [
    {
        label: 'Select Size',
        value: '0',
    },
    {
        label: 'Small',
        value: 's',
    },
    {
        label: 'Medium',
        value: 'm',
    },
    {
        label: 'Large',
        value: 'l',
    },
    {
        label: 'Extra Large',
        value: 'xl',
    },
];

const DetailProduct = ({ product }) => {
    const [size, setSize] = useState('0');
    const handleSelectSize = event => {
        setSize(event?.target?.value);
    };

    console.log(product);
    return (
        <div className="flex justify-center">
            {product && (
                <div className="container grid grid-cols-7 gap-6">
                    <div className="relative col-span-3">
                        <img
                            src={product?.images[0]}
                            alt="product img"
                            className="w-full h-full object-fill"
                        />
                    </div>
                    <div className="col-span-4">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" to={ROUTES.HOME}>
                                Home
                            </Link>
                            <Typography color="text.primary">{product?.title}</Typography>
                        </Breadcrumbs>
                        <span>{product?.title}</span>
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center">
                                <Star color="#D6763C" size={16} fill="#D6763C" />
                                <Star color="#D6763C" size={16} fill="#D6763C" />
                                <Star color="#D6763C" size={16} fill="#D6763C" />
                                <Star color="#D6763C" size={16} fill="#D6763C" />
                                <Star color="#D6763C" size={16} />
                            </div>
                            <span>{`(15)`}</span>
                        </div>
                        <div className="flex gap-2">
                            <span>
                                {Number(product?.price + 10).toLocaleString('en', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}
                            </span>
                            <span>
                                {Number(product?.price).toLocaleString('en', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}
                            </span>
                        </div>
                        <div className="min-h-[4.5rem] mt-7">
                            <span className="">{product?.description}</span>
                        </div>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            onChange={handleSelectSize}
                            className="mt-9"
                        >
                            {SELECT_DATA.map((item, index) => (
                                <MenuItem key={index} value={item?.value}>
                                    {item?.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailProduct;
