import { Button } from '@mui/material';
import React from 'react';

const ConfirmSection = () => {
    return (
        <div className="flex justify-center mt-[3.25rem]">
            <div className="container">
                <span className="text-[#1D1D1D] font-arimo text-4xl font-bold leading-[3rem]">
                    Your order
                </span>
                <table className="w-full table-auto">
                    <thead className="">
                        <tr className="border border-[#EBEBEB] ">
                            <th className="text-left px-4 py-5">Product</th>
                            <th className="text-left px-4 py-5">Total</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="border border-[#EBEBEB] ">
                            <td className=" px-4 py-5">Plain White Shirt</td>
                            <td className="px-4 py-5">$59</td>
                        </tr>
                        <tr className="border border-[#EBEBEB] ">
                            <td className=" px-4 py-5">Subtotal</td>
                            <td className="px-4 py-5">$59</td>
                        </tr>
                        <tr className="border border-[#EBEBEB] ">
                            <td></td>
                            <td className="px-4 py-5">$59</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex flex-col mt-11 px-6 pt-8 pb-14 gap-8  border boder-[#EBEBEB">
                    <div className="bg-[#FBFBFB border border-[#EBEBEB] py-6 px-4">
                        <span className="text-[#555] font-lato text-base font-normal leading-normal ">
                            Cash on delivery. Please contact us if you require assistance or wish to
                            make alternate arrangements.
                        </span>
                    </div>
                    <Button
                        variant="contained"
                        className="self-end bg-[#D6763C] text-white font-lato font-normal leading-5 uppercase py-[0.9rem] px-9"
                    >
                        place order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmSection;
