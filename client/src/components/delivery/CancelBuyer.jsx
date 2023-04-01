import { Rating } from '@mui/material'
import React from 'react'

const CancelBuyer = ({ setModel }) => {
    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer xsm:text-[16px] sm:text-[16px] text-[20px] sm:h-[35%] sm:w-[80%] xsm:w-[80%] xsm:h-[35%] h-[40%] w-[40%] flex flex-col justify-center items-center'>
                <h1 className='text-[1.25em] '>Cancel confirm</h1>
                <p className='w-[80%] text-[.75em] text-center font-[400] mt-[0.688em]'>Cancel the purchase of <span className='font-[800]'>Annax</span>, <span className='font-[800]'>Discart</span></p>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[1.5em]'>Leave a rating of <span className='font-[800]'>seller.</span></p>
                <Rating size='large' className='mb-[10px]' name="half-rating-read" onChange={(e) => console.log(e.target.value)} precision={0.5} />
                <button onClick={() => setModel(false)} className='py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-[#F21111]'>Cancel</button>
            </div>
        </>
    )
}

export default CancelBuyer