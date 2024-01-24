/* eslint-disable jsx-a11y/label-has-associated-control */
import { Breadcrumbs } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../types/routes';

const BillDetailSection = () => {
    return (
        <div className="flex justify-center">
            <div className="container">
                <Breadcrumbs className="mt-10">
                    <Link
                        to={ROUTES.HOME}
                        className="text-[#888] font-arimo text-base font-bold leading-normal uppercase"
                    >
                        Home
                    </Link>
                    <Link
                        to={ROUTES.CHECKOUT}
                        className="text-[#1D1D1D] font-arimo text-base font-bold leading-normal uppercase"
                    >
                        checkout
                    </Link>
                </Breadcrumbs>
                <div className="mt-9">
                    <span className="text-[#1D1D1D]  font-arimo text-4xl font-bold leading-[3rem] ">
                        Billing details
                    </span>
                    <form className="w-1/2 mt-6 flex flex-col gap-[1.13rem]">
                        <div className="flex flex-col gap-2">
                            <label>
                                <span className="text-[#555] font-lato text-base font-normal leading-normal">
                                    Full Name
                                </span>
                                <span className="text-[#D6763C] font-lato text-base font-normal leading-normal ">
                                    *
                                </span>
                            </label>
                            <input className="border border-[#EBEBEB] h-12 px-4 py-[1.13rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                <span className="text-[#555] font-lato text-base font-normal leading-normal">
                                    Street address
                                </span>
                                <span className="text-[#D6763C] font-lato text-base font-normal leading-normal ">
                                    *
                                </span>
                            </label>
                            <input
                                className="border border-[#EBEBEB] h-12 px-4 py-[1.13rem]"
                                placeholder="House number and street name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                <span className="text-[#555] font-lato text-base font-normal leading-normal">
                                    Phone
                                </span>
                                <span className="text-[#D6763C] font-lato text-base font-normal leading-normal ">
                                    *
                                </span>
                            </label>
                            <input className="border border-[#EBEBEB] h-12 px-4 py-[1.13rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>
                                <span className="text-[#555] font-lato text-base font-normal leading-normal">
                                    Email address
                                </span>
                                <span className="text-[#D6763C] font-lato text-base font-normal leading-normal ">
                                    *
                                </span>
                            </label>
                            <input className="border border-[#EBEBEB] h-12 px-4 py-[1.13rem]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BillDetailSection;
