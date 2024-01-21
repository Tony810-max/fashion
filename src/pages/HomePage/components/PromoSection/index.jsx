import { Button } from '@mui/material';
import React from 'react';

const PromoSection = () => {
    return (
        <div className="flex justify-center mt-9">
            <div className="container grid grid-cols-5 gap-5">
                <div className="bg-black col-span-3 flex flex-col items-center justify-center py-32">
                    <span className="text-white text-center font-lato text-[2rem] font-normal leading-[3.5rem] uppercase">
                        peace of mind
                    </span>
                    <span className="mt-6 text-white text-center font-lato text-lg font-normal max-w-[25.4rem] leading-6">
                        A one-stop platform for all your fashion needs, hassle-free. Buy with a
                        peace of mind.
                    </span>
                    <Button
                        variant="outlined"
                        className="bg-white border-none text-[#024E82] text-center text-sm font-normal leading-5 uppercase py-[0.88rem] px-9 mt-8"
                    >
                        buy now
                    </Button>
                </div>
                <div className="bg-black col-span-2 flex flex-col items-center justify-center py-32">
                    <span className="text-white text-center font-lato text-[2rem] font-normal leading-[3.5rem] uppercase">
                        Buy 2 Get 1 Free
                    </span>
                    <span className="mt-6 text-white text-center font-lato text-lg font-normal max-w-[25.4rem] leading-6">
                        End of season sale. Buy any 2 items of your choice and get 1 free.
                    </span>
                    <Button
                        variant="outlined"
                        className="bg-white border-none text-[#024E82] text-center text-sm font-normal leading-5 uppercase py-[0.88rem] px-9 mt-8"
                    >
                        buy now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PromoSection;
