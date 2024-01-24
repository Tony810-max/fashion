/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Badge } from '@mui/material';
import { AlignJustify, ShoppingBag, User } from 'lucide-react';
import React from 'react';
import NavHeader from './NavHeader';
import ROUTES from '../../../../types/routes';

const Header = ({ navBar, onNavBar }) => {
    return (
        <div className="relative flex flex-col items-center px-4">
            <div className="container flex items-center justify-between sm:justify-normal gap-6 md:gap-36 py-5  bg-white">
                <span className="text-[#1D1D1D] font-lato-sans-serif text-center text-3xl sm:text-4xl font-normal leading-normal">
                    NorthStar
                </span>
                <div className="hidden sm:flex items-center justify-between flex-1">
                    <div className="flex gap-2">
                        <NavHeader href={ROUTES.HOME} name={'home'} value={'HOME'} />
                        <NavHeader href={ROUTES.ABOUT} name={'about'} value={'ABOUT'} />
                        <NavHeader href={ROUTES.CONTACT} name={'contact us'} value={'CONTACT'} />
                    </div>
                    <div className="flex gap-7">
                        <User size={24} />
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBag size={24} />
                        </Badge>
                    </div>
                </div>
                <AlignJustify onClick={() => onNavBar(!navBar)} className="sm:block " />
            </div>
        </div>
    );
};

export default Header;
