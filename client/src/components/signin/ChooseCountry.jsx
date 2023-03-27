import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from 'react-router-dom';
import back from './../../assets/back.svg';

const ChooseCountry = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");

    return (
        <div className='bg-[#FAFAFA] min-h-screen flex flex-col' data-ux_mode="redirect">
            <header><img src={back} alt="back button" onClick={() => navigate(-1)} className='hover:cursor-pointer p-[32px]' /></header>
            <div className='flex flex-1  flex-col mx-[46px]  items-center pt-[10rem]  '>
                <h1 className='font-sans leading-[24.38px] font-[500] text-[1.2rem]'>What country are you primarily selling and buying discs in?</h1>
                <div className='w-full  mt-[19px] mb-[19px]'>
                    <ReactFlagsSelect
                        selected={selected}
                        fullWidth={true}
                        searchable={true}
                        alignOptionsToRight={true}
                        onSelect={(code) => { setSelected(code); console.log(code); }}
                        className='w-[90%] pl-[4px] border-[1px] border-[#595959] rounded-[2px] font-sans'
                        placeholder="Choose a country"
                    />
                </div>
                <div className='flex w-full'><button className='w-[5.188em] h-[2.313em] text-[0.875rem] font-[700] bg-primary text-[#ffff] shadow-2xl rounded-[6px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }}>Next</button></div>
            </div>
        </div>
    )
}

export default ChooseCountry