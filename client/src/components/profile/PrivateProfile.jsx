import { Rating } from '@mui/material'
import React from 'react'
import user from './../../assets/user.svg'

const PrivateProfile = () => {
    return (
        <div className='mx-[2.575em] flex justify-center sm:mx-[1.575em] xsm:mx-[1.575em] sm:my-[1.25em] xsm:my-[1.25em] text-[1.3rem] sm:text-[1rem] xsm:text-[1rem] my-[2.25em]'>
            <div className='flex gap-[0.938em] md:gap-[1.5em]  lg:gap-[3.4em] xl:gap-[4em] 2xl:gap-[4em] '>
                <div className='flex flex-col'>
                    <img src={user} className="xsm:h-[3.125em] sm:h-[3.125em] md:h-[3.725em] lg:h-[3.725em] 2xl:h-[3.725em] " alt="user" />
                    <Rating size='small' name="half-rating-read" defaultValue="3.5" precision={0.5} readOnly />
                </div>
                <div className='flex flex-col justify-between  '>
                    <div>
                        <h1 className='text-[0.75em] font-[700] ' >Fred Isaksson</h1>
                        <h1 className='text-[0.5em] font-[500] text-[#595959bf]' >Joined 2022</h1>
                    </div>
                    <div>
                        <h1 className='text-[0.75em] font-[700] mt-[1em] ' >Address</h1>
                        <p className='text-[0.5em]  font-[500] text-[#595959bf]' >Adress Tullgarsgatan 27 753 17 Uppsala </p>
                    </div>
                </div>
                <div className='flex flex-col justify-between ml-[em] '>
                    <button className='text-[#ffffff] rounded-[2px] button text-[.75em] py-[0.375em] px-[1em] bg-primary '>Edit</button>
                    <div>
                        <h1 className='text-[0.75em] font-[700] min-w-[100px] ' >Phone Number</h1>
                        <h1 className='text-[0.5em] font-[500] text-[#595959bf]' >0707721066</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PrivateProfile