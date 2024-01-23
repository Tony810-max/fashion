import React from 'react';
import Header from '../../components/Layout/MainLayout/Header';
import BannerSection from './components/BannerSection';
import Footer from '../../components/Layout/MainLayout/Footer';
import ContactUsSection from './components/ContactUsSection';

const ContactPage = () => {
    return (
        <div>
            <Header />
            <BannerSection />
            <ContactUsSection />
            <Footer />
        </div>
    );
};

export default ContactPage;
