import { Button } from '@mui/material';
import React from 'react';

const TotalCartSection = () => {
    return (
        <div className="flex justify-center ">
            <div className="container pt-[5.2rem] pb-[6.7rem]">
                <div className=" mt-[5.3rem] w-1/2">
                    <span className="text-[#1D1D1D] font-arimo text-4xl font-bold leading-[3rem]">
                        Cart Totals
                    </span>
                    <table className="w-full">
                        <tr className="border border-collapse border-t-0 border-l-0 border-r-0 border-b-[#E5E5E5]">
                            <td className="py-5  text-[#555] font-lato text-base font-normal leading-normal">
                                Subtotal
                            </td>
                            <td className="text-right">$59.00</td>
                        </tr>
                        <tr className="border border-t-0 border-l-0 border-r-0 border-b-[#E5E5E5]">
                            <td className="py-5  text-[#555] font-lato text-base font-normal leading-normal">
                                Shipping Free
                            </td>
                            <td className="text-right">FREE!!!</td>
                        </tr>
                        <tr>
                            <td className="py-5  text-[#1D1D1D] font-arimo text-base font-bold leading-normal">
                                Total
                            </td>
                            <td className="text-right">$59.00</td>
                        </tr>
                    </table>
                </div>
                <Button
                    variant="contained"
                    className="mt-10 text-white text-center font-lato text-base leading-[1.4rem] uppercase bg-[#D6763C] py-[1.15rem] px-9 rounded-none hover:opacity-70"
                >
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
};

export default TotalCartSection;
