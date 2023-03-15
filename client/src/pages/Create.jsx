import React from 'react'
import upload from '../assets/upload.svg'

const Create = () => {
    return (
        <div className=' mx-[37px] mt-[0.5em] '>
            <h1 className='font-[700] text-[1.25rem] mb-[9px]'>Create a listing</h1>
            <div className='bg-[#FFFFFF] rounded-[8px]  border-[#0000001f] border-[0.5px]'>
                <div className='flex justify-center items-center h-[219px]'>
                    <img src={upload} alt="upload a picture" />
                </div>
                <div className=' border-[0.5px] border-[#0000002e] mb-[14px]'></div>
                <div><label htmlFor="Qty" className='text-[0.75rem] ml-[1em] text-[#595959] font-[700]'>Qty <input type="number" min='1' value={1} className='ml-[8px] border-[1px] h-[20px] rounded-[2px] w-[31px]' name="" id="" /></label> </div>
            </div>
        </div>
    )
}

export default Create