import React, { useState } from 'react';

import BannerSection from './components/BannerSection';
import NewProductSection from './components/NewProductSection';
import FeaturePage from './components/FeaturePage';
import PromoSection from './components/PromoSection';
import BestSelling from './components/BestSellingSection';
import Header from '../../components/Layout/MainLayout/Header';
import Footer from '../../components/Layout/MainLayout/Footer';
import NavBar from '../../components/Layout/MainLayout/Header/NavBar';

const HomePage = () => {
    const [navBar, setNavBar] = useState(false);
    return (
        <div className="w-full">
            <Header onNavBar={setNavBar} navBar={navBar} />
            {navBar && <NavBar />}
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
