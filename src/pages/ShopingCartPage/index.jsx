import React from 'react';
import Header from '../../components/Layout/MainLayout/Header';
import TableCartSection from './components/TableCartSection';
import TotalCartSection from './components/TotalCartSection';
import Footer from '../../components/Layout/MainLayout/Footer';

const ShopingCartPage = () => {
    return (
        <div>
            <Header />
            <TableCartSection />
            <TotalCartSection />
            <Footer />
        </div>
    );
};

export default ShopingCartPage;
