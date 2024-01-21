/* eslint-disable react/prop-types */
import { Breadcrumbs, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../types/routes';
import { Star } from 'lucide-react';
import { MenuItem } from '@mui/base';

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
                                <Star color="yellow" size={16} fill="yellow" />
                                <Star color="yellow" size={16} fill="yellow" />
                                <Star color="yellow" size={16} fill="yellow" />
                                <Star color="yellow" size={16} fill="yellow" />
                                <Star color="yellow" size={16} />
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
                        <div>
                            <span>{product?.description}</span>
                        </div>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="size"
                            onChange={handleSelectSize}
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
