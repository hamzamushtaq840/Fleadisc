import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import back from './../../assets/back.svg';
import { toast } from 'react-toastify';

const ChooseCountry = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const registrationState = location.state;
    const [selected, setSelected] = useState("SE");
    const { mutate, isLoading } = useMutation((formData) => {
        return axios.post('/user/register', formData);
    });

    const handleCountry = () => {
        const formData = {
            name: registrationState.name,
            email: registrationState.email,
            password: registrationState.password,
            country: selected,
        };
        mutate(formData, {
            onSuccess: (res) => {
                console.log(res);
                toast.success('Account Created');
                navigate('/signin');
            },
            onError: (err) => {
                toast.error(err.response.data.message);
            },
        });
    }

    return (
        <div className='bg-[#FAFAFA] xsm:text-[1rem] sm:text-[1rem] text-[1.2rem] min-h-screen flex flex-col' data-ux_mode="redirect">
            <header><img src={back} alt="back button" onClick={() => navigate(-1)} className='hover:cursor-pointer p-[32px]' /></header>
            <div className='flex flex-1  flex-col mx-[46px]  items-center pt-[10rem]  '>
                <h1 className='font-sans leading-[24.38px max-w-[370px] font-[500] text-[1.2em]'>What country are you primarily selling and buying discs in?</h1>
                <div className='xsm:w-[100%]  sm:w-[100%] w-[50%]  mt-[1.1875em] mb-[1.5em]'>
                    <ReactFlagsSelect
                        selected={selected}
                        fullWidth={true}
                        searchable={true}
                        alignOptionsToRight={true}
                        onSelect={(code) => { setSelected(code) }}
                        className='w-[100%] pl-[4px] border-[1px] border-[#595959] rounded-[2px] font-sans'
                        placeholder="Choose a country"
                    />
                </div>
                <div className='flex xsm:w-[100%] sm:w-[100%]  '><button className='w-[5.188em] h-[2.313em] text-[0.875em] font-[700] bg-primary text-[#ffff] shadow-2xl rounded-[6px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }} onClick={handleCountry}>{!isLoading ? 'Finish' : 'wait...'}</button></div>
            </div>
        </div>
    )
}

export default ChooseCountry