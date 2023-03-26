import { Rating } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CancelSeller = ({ setModel }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer xsm:text-[16px] sm:text-[16px] text-[20px] sm:h-[40%] sm:w-[80%] xsm:w-[80%] xsm:h-[40%] h-[50%] w-[40%] flex flex-col justify-center items-center'>
                <h1 className='text-[1.25em] '>Cancel confirm</h1>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[0.688em]'>This sale has been requested to be canceled by the <span className='font-[800]'>seller.</span></p>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[1.5em]'>Leave a rating of <span className='font-[800]'>buyer.</span></p>
                <Rating size='large' className='mb-[10px]' name="half-rating-read" onChange={(e) => console.log(e.target.value)} precision={0.5} />


                <div className='flex flex-col gap-[11px] mt-[.5em]'>
                    <button onClick={() => navigate('/create/relist')} className='py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-primary'>Re-list</button>
                    <button onClick={() => setModel(false)} className='py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-[#F21111]'>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default CancelSeller