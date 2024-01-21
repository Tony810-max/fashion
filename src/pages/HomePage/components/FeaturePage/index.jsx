import React from 'react';
import FeatureCard from '../../../../componets/FeatureCard';

import { Fingerprint, Undo2, Truck } from 'lucide-react';

const FeaturePage = () => {
    return (
        <div className="flex justify-center mt-[1.15rem]">
            <div className="container grid grid-cols-4 gap-[4.5rem] py-[4.5rem]">
                <FeatureCard
                    Icon={Truck}
                    name="Free Shipping"
                    desc="Enjoy free shipping on all orders above $100"
                />
                <FeatureCard
                    Icon={Fingerprint}
                    name="SUPPORT 24/7"
                    desc="Our support team is there to help you for queries"
                />
                <FeatureCard
                    Icon={Undo2}
                    name="30 DAYS RETURN"
                    desc="Simply return it within 30 days for an exchange."
                />
                <FeatureCard
                    Icon={Fingerprint}
                    name="100% PAYMENT SECURE"
                    desc="Our payments are secured with 256 bit encryption"
                />
            </div>
        </div>
    );
};

export default FeaturePage;
