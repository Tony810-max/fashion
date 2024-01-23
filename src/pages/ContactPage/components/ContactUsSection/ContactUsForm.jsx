/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup
    .object()
    .shape({
        name: yup.string().required('name is requires'),
        mess: yup.string().required('message is requires'),
        email: yup.string().email('Email is not valid').required('email is requires'),
    })
    .required();

const ContactUsForm = ({ onCheckData }) => {
    const [dataCurrent, setDataCurrent] = useState([]);
    const [checkEmail, setCheckEmail] = useState(null);
    const fetchData = async () => {
        try {
            const respons = await axios.get('https://fakestoreapi.com/users');
            if (respons) {
                setDataCurrent(respons.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleDataSubmit = data => {
        dataCurrent.some(itemm => {
            if (data.email == itemm.email) {
                console.log('co ton tai');
                setCheckEmail(true);
                onCheckData(true);
                return true;
            } else {
                console.log('chua dang ki');
                setCheckEmail(false);
            }
        });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <form className="mt-12" onSubmit={handleSubmit(handleDataSubmit)}>
            <div className="flex gap-5">
                <div className="flex-1 flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-[#555] font-lato text-base font-normal leading-normal"
                    >
                        Name
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        className="border border-[#EBEBEB] h-14"
                        name="name"
                    />
                    {errors.name && (
                        <span className="text-red-600 font-bold italic">{errors.name.message}</span>
                    )}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-[#555] font-lato text-base font-normal leading-normal"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        className="border border-[#EBEBEB] h-14"
                        name="email"
                        {...register('email')}
                    />
                    {errors.email && (
                        <span className="text-red-600 font-bold italic">
                            {errors.email.message}
                        </span>
                    )}
                    {checkEmail === false && (
                        <span className="text-red-600 font-bold italic">
                            Email này chưa đăng ký
                        </span>
                    )}
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
                <label>Message</label>
                <textarea
                    {...register('mess')}
                    rows={6}
                    className="border border-[#EBEBEB]"
                    name="mess"
                />
                {errors.mess && (
                    <span className="text-red-600 font-bold italic">{errors.mess.message}</span>
                )}
            </div>
            <Button
                type="submit"
                variant="outlined"
                className="bg-[#024E82] text-white font-lato text-base font-normal leading-[1.38rem] uppercase py-[1.15rem] px-9 rounded-none mt-6"
            >
                send message
            </Button>
        </form>
    );
};

export default ContactUsForm;
