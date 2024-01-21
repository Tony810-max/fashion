import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../../../componets/ProductCard';

const NewProductSection = () => {
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
        <div className="w-full min-h-screen flex justify-center">
            <div className="container flex flex-col">
                <div className="flex flex-col items-center gap-4 mt-[2.67rem]">
                    <span className="text-[#1D1D1D] font-arimo text-4xl font-bold leading-[3rem]">
                        Discover NEW Arrivals
                    </span>
                    <span className="text-[#555] font-lato text-xl font-normal leading-[3rem]">
                        Recently added shirts!
                    </span>
                </div>
                <div className="grid grid-cols-4 gap-x-5 gap-y-12 mt-12">
                    {data?.map((product, index) => {
                        if (index > 7) return;
                        return (
                            <ProductCard
                                key={product?.id}
                                id={product?.id}
                                name={product?.title}
                                image={product?.images[0]}
                                price={product?.price}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NewProductSection;
