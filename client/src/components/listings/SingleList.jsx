import React, { useState } from 'react'
import { Rating } from '@mui/material'
import user from '../../assets/user.svg'
import SingleListCard from './SingleListCard';

const SingleList = ({ value, index }) => {

    return (
        <>
            <div key={index} className='flex  flex-col'>
                <div className='flex px-[19px] mb-[2px] gap-[0.563em] mt-[1.063em]'>
                    <img src={user} className="cursor-pointer mt-1 xsm:h-[1.563em] sm:h-[1.563em] md:h-[1.9em] lg:h-[2em] 2xl:h-[2em] " alt="user" />
                    <div className='flex flex-col justify-start'>
                        <h1 className='text-[0.75em] font-[500] cursor-pointer' onClick={() => navigate('/profile/public')} >{value.name}</h1>
                        <div className='ml-[-0.2em]'>
                            <Rating size='small' name="half-rating-read" onChange={(e) => console.log(e.target.value)} defaultValue={value.rating} precision={0.5} readOnly />
                        </div>
                    </div>
                </div>

                <div className='flex px-[19px] xsm:overflow-auto sm:overflow-auto pb-[5px] gap-[10px]  '>
                    {value.activelistings.map((val) => {
                        return (
                            <SingleListCard val={val} index={index} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default SingleList