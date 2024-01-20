import React from 'react';
import Header from '../../componets/Layout/MainLayout/Header';
import BannerSection from './components/BannerSection/BannerSection';

const HomePage = () => {
    return (
        <div className="w-full">
            <Header />
            <BannerSection />
        </div>
    );
};

export default HomePage;
