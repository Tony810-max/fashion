/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = ({ name, whiteSpace, active, setActive }) => {
    return (
        <Link
            onClick={() => setActive(name)}
            to="/"
            className={classNames(
                'text-black text-xs font-bold leading-normal tracking-[0.0375rem] uppercase font-arimo-sans-serif hover:opacity-70 hover:text-[#024E82]',
                { 'text-red-800': active === name }
            )}
        >
            {whiteSpace ? whiteSpace : name}
        </Link>
    );
};

export default NavHeader;
