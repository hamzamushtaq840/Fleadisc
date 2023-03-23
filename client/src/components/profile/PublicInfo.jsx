import { Rating } from '@mui/material'
import React from 'react'
import user from './../../assets/user.svg'


const PublicInfo = () => {
    return (
        <>
            <div className='flex xsm:justify-between sm:justify-between px-[10px] mt-[20px] gap-[0.938em]  justify-center  md:gap-[5.5em]  lg:gap-[8.4em] xl:gap-[8em] 2xl:gap-[10em] '>

                <div className='flex gap-[16px] flex-col'>
                    <div className='flex flex-col '>
                        {/* <img src={user} className="xsm:h-[4.125em] sm:h-[3.125em] md:h-[3.725em] lg:h-[3.725em] 2xl:h-[3.725em] " alt="user" /> */}
                        <div>
                            <h1 className='text-[0.75em] font-[700] text-[#595959]' >Fred Isaksson</h1>
                            <h1 className='text-[0.5em] font-[500] text-[#595959bf]' >Joined 2022</h1>
                        </div>
                        <div className='flex items-center gap-[3px]'>
                            <p className='text-[0.75em] font-[700]'>4.0</p>
                            <Rating size='small' name="half-rating-read" defaultValue="3.5" precision={0.5} readOnly />
                            <p className='text-[0.75em] text-[#595959]'>(23)</p>
                        </div>
                    </div>

                    <div className='flex flex-col '>
                        <h1 className='text-[0.75em] font-[600]' >Delivery Address</h1>
                        <h1 className='text-[0.75em] font-[500] text-[#595959bf]' >Uppsala,Sweden</h1>
                    </div>


                    <div className='flex flex-col '>
                        <h1 className='text-[0.75em] font-[600]' >Shipping Address</h1>
                        <h1 className='text-[0.75em] font-[500] text-[#595959bf]' >Uppsala,Sweden</h1>
                    </div>

                </div>

                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-[0.75em] font-[600]' >Accepted payments</h1>
                        <div className='w-[100%]  mt-[10px] flex items-center gap-[6px]'>
                            <input name='collectible'
                                checked={true}
                                id='collectible' type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[0.75em] font-[600] '>Swish</p>
                        </div>
                        <div className='w-[100%]  mt-[15px] flex items-center gap-[6px]'>
                            <input name='collectible'
                                checked={true}
                                id='collectible' type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[0.75em] font-[600] '>Bank transaction</p>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-[0.75em] font-[600]' >Who pays shipping? </h1>
                        <div className='w-[100%]  mt-[10px] flex items-center gap-[6px]'>
                            <input name='collectible'
                                checked={true}
                                id='collectible' type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[0.70em] font-[600] '>Buyer</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PublicInfo