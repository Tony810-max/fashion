import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import DetailProduct from './components/DetailProduct';
import Header from '../../components/Layout/MainLayout/Header';

const DetailProductPage = () => {
    const [data, setData] = useState();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('id'));
    const fetchDetailProductData = async () => {
        try {
            const response = await axios.get(
                `https://api.escuelajs.co/api/v1/products/${searchParams.get('id')}`
            );
            if (response) {
                setData(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDetailProductData();
    }, []);

    return (
        <div>
            <Header />
            <DetailProduct product={data} />
        </div>
    );
};

export default DetailProductPage;
