import { Breadcrumbs } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../types/routes';
import { X } from 'lucide-react';

const TableCartSection = () => {
    return (
        <div className="flex justify-center mt-10">
            <div className="container">
                <Breadcrumbs>
                    <Link
                        to={ROUTES.HOME}
                        className="text-[#888] font-arimo text-base font-bold leading-normal uppercase"
                    >
                        Home
                    </Link>
                    <Link
                        to={ROUTES.CART}
                        className="text-[#1D1D1D] font-arimo text-base font-bold leading-normal uppercas"
                    >
                        shopping cart
                    </Link>
                </Breadcrumbs>
                <table className="w-full ">
                    <thead className="pb-4">
                        <tr className="">
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="border-collapse border border-t-slate-400 border-b-slate-400 border-r-0 border-l-0">
                            <td className="text-center  py-9">
                                <X color={'#BEBEBE'} className="cursor-pointer hover:opacity-50 " />
                            </td>
                            <td className="text-center  ">Plain White Shirt</td>
                            <td className="text-center  ">$59.00</td>
                            <td className="text-center  ">
                                <input
                                    type="number"
                                    className="text-center w-[3.3rem] h-[2.65rem] border-2 border-[#EBEBEB]"
                                    value={1}
                                    min={1}
                                />
                            </td>
                            <td className="text-center  ">$59.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableCartSection;
