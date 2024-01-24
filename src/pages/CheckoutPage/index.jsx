import React from 'react';
import Header from '../../components/Layout/MainLayout/Header';
import BillDetailSection from './components/BillDetailSection';
import ConfirmSection from './components/ConfirmSection';
import Footer from '../../components/Layout/MainLayout/Footer';

const CheckoutPage = () => {
    return (
        <div>
            <Header />
            <BillDetailSection />
            <ConfirmSection />
            <Footer />
        </div>
    );
};

export default CheckoutPage;
