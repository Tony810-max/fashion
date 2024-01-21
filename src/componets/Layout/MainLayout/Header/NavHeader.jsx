/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ROUTES from '../../../../types/routes';

const NavHeader = ({ name, href, value }) => {
    let location = useLocation();

    return (
        <Link
            to={href}
            className={classNames(
                'text-black text-xs font-bold leading-normal tracking-[0.0375rem] uppercase font-arimo-sans-serif hover:opacity-70 hover:text-[#024E82] px-2',
                { 'text-red-800': location.pathname === ROUTES[value] }
            )}
        >
            {name}
        </Link>
    );
};

export default NavHeader;
