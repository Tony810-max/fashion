import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../../types/routes';
import { Divider, TextField } from '@mui/material';
import { ChevronRight } from 'lucide-react';

import masterCard from '../../../../assets/images/Footer/mastercard.webp';
import paypal from '../../../../assets/images/Footer/paypal.webp';
import visa from '../../../../assets/images/Footer/visa.webp';
import visaElectron from '../../../../assets/images/Footer/visaElectron.webp';

const Footer = () => {
    return (
        <div className="mt-28 flex justify-center bg-[#FBFBFB] pt-[3.3rem] pb-8">
            <div className="container">
                <div className="flex gap-[13.5rem]">
                    <div>
                        <span className="text-[#1D1D1D] font-arimo text-xs font-bold leading-normal tracking-[0.038rem] uppercase">
                            Company info
                        </span>
                        <div className="mt-[1.85rem] flex flex-col">
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                About Us
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Latest Posts
                            </Link>
                            <Link
                                to={ROUTES.CONTACT}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to={ROUTES.PRODUCT}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Shop
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span className="text-[#1D1D1D] font-arimo text-xs font-bold leading-normal tracking-[0.038rem] uppercase">
                            help links
                        </span>
                        <div className="mt-[1.85rem] flex flex-col">
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Tracking
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Order Status
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Delivery
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Shipping Info
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span className="text-[#1D1D1D] font-arimo text-xs font-bold leading-normal tracking-[0.038rem] uppercase">
                            useful links
                        </span>
                        <div className="mt-[1.85rem] flex flex-col">
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Special Offers
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Gift Cards
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Advetising
                            </Link>
                            <Link
                                to={'/'}
                                className="text-[#1D1D1D] font-lato text-base font-normal leading-7 hover:opacity-70"
                            >
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span className="text-[#1D1D1D] font-arimo text-xs font-bold leading-normal tracking-[0.038rem] uppercase">
                            get in the know
                        </span>
                        <div className="mt-[1.85rem] flex items-center justify-center ">
                            <TextField
                                label="Enter email"
                                variant="standard"
                                className="min-h-12"
                            />
                            <ChevronRight className="" />
                        </div>
                    </div>
                </div>
                <Divider className="mt-[4.5rem]" />
                <div className="flex justify-between">
                    <div className="flex flex-col gap-[0.65rem]">
                        <span className="text-[#1D1D1D] font-lato text-sm font-normal leading-7">
                            &copy; 2020 NorthStar eCommerce
                        </span>
                        <span className="text-[#1D1D1D] font-lato text-sm font-normal leading-7">
                            Privacy Policy Terms & Conditions
                        </span>
                    </div>
                    <div className="flex">
                        <img src={masterCard} alt="imgPayment" />
                        <img src={paypal} alt="imgPayment" />
                        <img src={visa} alt="imgPayment" />
                        <img src={visaElectron} alt="imgPayment" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
