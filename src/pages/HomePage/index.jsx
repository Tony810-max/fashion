import React from 'react';
import Header from '../../componets/Layout/MainLayout/Header';
import BannerSection from './components/BannerSection';
import NewProductSection from './components/NewProductSection';
import FeaturePage from './components/FeaturePage';
import PromoSection from './components/PromoSection';
import BestSelling from './components/BestSellingSection';
import Footer from '../../componets/Layout/MainLayout/Footer';

const HomePage = () => {
    return (
        <div className="w-full">
            <Header />
            <BannerSection />
            <NewProductSection />
            <FeaturePage />
            <PromoSection />
            <BestSelling />
            <Footer />
        </div>
    );
};

export default HomePage;
