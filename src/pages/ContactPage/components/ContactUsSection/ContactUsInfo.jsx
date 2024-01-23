import React from 'react';

const ContactUsInfo = () => {
    return (
        <div>
            <div>
                <span className="text-[#1D1D1D] font-arimo text-2xl font-bold leading-[3rem]">
                    Visit Us
                </span>
                <div className="flex flex-col mt-4 min-h-16">
                    <span className="text-[#555] font-lato text-base font-normal leading-normal">
                        UET Lahore, Punjab, Pakistan
                    </span>
                    <span className="text-[#555] font-lato text-base font-normal leading-normal">
                        Phone: +923039898987
                    </span>
                </div>
            </div>
            <div className="flex flex-col mt-12 gap-4">
                <span className="text-[#1D1D1D] font-arimo text-2xl font-bold leading-[3rem]">
                    Get In Touch
                </span>
                <span className="text-[#555] font-lato text-base font-normal leading-normal whitespace-pre-line">
                    {` You can get in touch with us on this provided email.

                Email: hmjawad087@gmail.com`}
                </span>
            </div>
        </div>
    );
};

export default ContactUsInfo;
