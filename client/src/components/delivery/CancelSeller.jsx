import { Rating } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import user from './../../assets/user.svg'
const CancelSeller = ({ setModel }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer py-[1em] xsm:text-[16px] sm:text-[16px] text-[20px]  sm:w-[80%] xsm:w-[80%] w-[40%] flex flex-col justify-center items-center'>
                <h1 className='text-[1.25em] '>Cancel confirm</h1>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[0.688em]'><span className='font-[800]'>Fred Isaksson </span>has canceled the purchase of <span className='font-[800]'>Annax</span>, <span className='font-[800]'>Discart</span></p>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[1.5em]'>Leave a rating of <span className='font-[800]'>buyer.</span></p>
                <Rating size='large' className='mb-[20px]' name="half-rating-read" onChange={(e) => console.log(e.target.value)} precision={0.5} />
                <div className='flex gap-[20px]  mb-[20px] items-center'>
                    <div className='flex gap-[0.563em]  '>
                        <img onClick={() => navigate('/profile/public')} src={user} className="cursor-pointer mt-[3px] xsm:h-[1.563em] sm:h-[1.563em] md:h-[1.9em] lg:h-[2em] xl:h-[2em] 2xl:h-[2em] " alt="user" />
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-[0.75em] font-[500] cursor-pointer' onClick={() => navigate('/profile/public')} >{"Fred"}</h1>
                            <div className='ml-[-0.2em] flex gap-[5px] mb-[6px]'>
                                <Rating size='small' name="half-rating-read" onChange={(e) => console.log(e.target.value)} defaultValue={3.5} precision={0.5} readOnly />
                                <p className='text-[0.7em] font-[500]'>(23)</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[0.75em] font-[600]'>120sek</p>
                        <p className='text-[0.5em] mt-[-2px] font-[500]'>Next highest</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[11px] mb-[1em] mt-[.5em]'>
                    <button onClick={() => navigate('/create/relist')} className='py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-primary'>Re-list</button>
                    <button onClick={() => setModel(false)} className='py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-[#F21111]'>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default CancelSeller