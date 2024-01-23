import React from 'react';

import BannerSection from './components/BannerSection';
import FeatureSection from './components/FeatureSection';
import ReviewSection from './components/ReviewSection';
import Header from '../../components/Layout/MainLayout/Header';
import Footer from '../../components/Layout/MainLayout/Footer';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <BannerSection />
            <FeatureSection />
            <ReviewSection />
            <Footer />
        </div>
    );
};

export default AboutPage;
