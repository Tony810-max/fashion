/* eslint-disable prettier/prettier */
import { Badge } from '@mui/material';
import { AlignJustify, ShoppingBag, User } from 'lucide-react';
import React, { useState } from 'react';
import NavHeader from './NavHeader';

const Header = () => {
    const [active, setActive] = useState('');

    return (
        <div className=" flex justify-center">
            <div className="container flex justify-between items-center py-5  bg-white">
                <span className="text-[#1D1D1D] font-lato-sans-serif text-center text-4xl font-normal leading-normal">
                    NorthStar
                </span>
                <div className="flex gap-2">
                    <NavHeader name={'home'} active={active} setActive={setActive} />
                    <NavHeader name={'about'} active={active} setActive={setActive} />
                    <NavHeader
                        name={'contactUs'}
                        whiteSpace={'Contact Us'}
                        active={active}
                        setActive={setActive}
                    />
                </div>
                <div className="flex gap-7">
                    <User size={24} />
                    <Badge badgeContent={4} color="primary">
                        <ShoppingBag size={24} />
                    </Badge>
                    <AlignJustify size={24} />
                </div>
            </div>
        </div>
    );
};

export default Header;

