import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { Us } from "react-flags-select";

const Listing = () => {
    const [selected, setSelected] = useState("");

    return (
        <div className=' w-[100vw] m-auto '>
            <div className='listingBackgroundImage flex  justify-center h-[35vw] min-h-[135px] max-h-[300px] bg-[rgba(0,0,0,0.1)] relative'>
                <h1 className='text-[35px] sm:text-[25px] xsm:text-[25px] md:text-[30px] leading-[34.9px] text-[white] font-logo text-center relative z-10 mt-[clamp(50px,10vw,110px)]'>Give a disc a second arm</h1>
                <input style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='border-[1px] w-[64.10vw] max-w-[500px] min-w-[250px] border-[#81B29A] absolute bottom-[-24px] bg-[white] z-10 h-[47px] rounded-lg px-[14px] font-sans' type='text' placeholder='Search...'></input>
            </div>

            <div className='mt-[40px] flex gap-[10px] items-center justify-center'>
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    showSelectedLabel={false}
                    showOptionLabel={false}
                    placeholder={<Us />}
                    optionsSize={32}
                    className="border-0 "
                    selectedSize={32}
                />
                <select className='outline-none w-[74px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option selected disabled value={null}>Range</option>
                </select>
                <select className='outline-none w-[76px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option selected disabled value={null}>Brand</option>
                </select>
                <select className='outline-none w-[92px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option selected disabled value={null}>Condition</option>
                </select>
            </div>
            <div className='mt-[16px] flex gap-[10px] items-center justify-center'>
                <button className='w-[57px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>New</button>
                <button className='w-[66px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Popular</button>
                <button className='w-[99px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Short on time</button>
                <button className='w-[77px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Following</button>
            </div>
        </div>
    )
}

export default Listing