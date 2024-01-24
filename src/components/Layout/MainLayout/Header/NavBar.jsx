import React from 'react';
import ROUTES from '../../../../types/routes';
import NavHeader from './NavHeader';
import { Badge, ShoppingBag, User } from 'lucide-react';

const NavBar = () => {
    return (
        <div className="flex justify-center">
            <div className="container flex items-center justify-between px-3">
                <div className="flex gap-2">
                    <NavHeader href={ROUTES.HOME} name={'home'} value={'HOME'} />
                    <NavHeader href={ROUTES.ABOUT} name={'about'} value={'ABOUT'} />
                    <NavHeader href={ROUTES.CONTACT} name={'contact us'} value={'CONTACT'} />
                </div>
                <div className="flex gap-5">
                    <User size={24} />
                    <Badge badgeContent={4} color="primary">
                        <ShoppingBag size={24} />
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
