import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../../../componets/ProductCard';
import { Button } from '@mui/material';

const BestSelling = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            if (response) {
                setData(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex justify-center mt-[5.5rem]">
            <div className="container flex flex-col items-center">
                <div className="flex flex-col gap-4">
                    <span className="text-[#1D1D1D] text-center font-arimo text-3xl font-bold leading-[3rem]">
                        Top Sellers
                    </span>
                    <span className="   text-[#555] text-center font-lato text-xl font-normal leading-[3rem]">
                        Browse our top-selling products
                    </span>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-12">
                    {data?.map((item, index) => {
                        if (index > 3) return;
                        return (
                            <ProductCard
                                key={item?.id}
                                id={item?.id}
                                name={item?.title}
                                image={item?.images[0]}
                                price={item?.price}
                            />
                        );
                    })}
                </div>
                <Button
                    variant="outlined"
                    className="bg-[#024E82] text-white text-center font-lato text-base font-normal leading-[1.4rem] uppercase mt-[4.5rem] py-[1.15rem] px-9 "
                >
                    shop now
                </Button>
            </div>
        </div>
    );
};

export default BestSelling;
