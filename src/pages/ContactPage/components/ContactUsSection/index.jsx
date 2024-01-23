import React, { useState } from 'react';
import ContactUsFormTitle from './ContactUsFormTitle';
import ContactUsForm from './ContactUsForm';
import ContactUsInfo from './ContactUsInfo';
import { Button } from '@mui/material';

const ContactUsSection = () => {
    const [checkData, setCheckData] = useState(false);
    return (
        <div className="flex justify-center mt-[9.5rem]">
            <div className="container flex gap-[4.4rem]">
                {checkData === false ? (
                    <div>
                        <ContactUsFormTitle />
                        <ContactUsForm onCheckData={setCheckData} />
                    </div>
                ) : (
                    <div className="flex flex-col justify-between mt-24">
                        <span className="text-[#3A3939] font-arimo text-4xl font-bold leading-[3rem]">
                            Message sent. We’ll contact you soon.
                        </span>
                        <Button
                            onClick={() => setCheckData(false)}
                            variant="outlined"
                            className="w-fit bg-[#024E82] text-white font-lato text-base font-normal leading-[1.38rem] uppercase py-[1.15rem] px-9 rounded-none "
                        >
                            Go back
                        </Button>
                    </div>
                )}

                <ContactUsInfo />
            </div>
        </div>
    );
};

export default ContactUsSection;
