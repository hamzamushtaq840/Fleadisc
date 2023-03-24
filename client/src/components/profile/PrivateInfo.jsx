import { Rating } from '@mui/material';
import React, { useState } from 'react'

const PrivateInfo = () => {
    const [buyerChecked, setBuyerChecked] = useState(false);
    const [meChecked, setMeChecked] = useState(false);

    function handleBuyerChange(event) {
        setBuyerChecked(event.target.checked);
        setMeChecked(false);
    }

    function handleMeChange(event) {
        setMeChecked(event.target.checked);
        setBuyerChecked(false);
    }
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
                        <h1 className='text-[0.75em]  max-w-[150px] font-[500] text-[#595959bf]' > Tullgarsgatan 27 753 17 Upsad asd asd asd asd as das dasd psala </h1>
                    </div>


                    <div className='flex flex-col '>
                        <h1 className='text-[0.75em] font-[600]' >Shipping Address</h1>
                        <h1 className='text-[0.75em] max-w-[150px] font-[500] text-[#595959bf]' > Tullgarsgatan 27 753 sda sad asd asd ad adas das  17 Uppsala </h1>
                    </div>

                </div>

                <div className='flex flex-col '>
                    <div className='flex flex-col'>
                        <h1 className='text-[0.75em] min-w-[150px] font-[600]' >Accepted payments</h1>
                        <div className='w-[100%] mt-[10px] flex gap-[6px]'>
                            <input name='collectible'
                                id='collectible' type="checkbox"
                                className="peer-published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                            />
                            <div className='flex flex-col mt-[-3px]'>
                                <p className='peer-checked:text-[#000000] text-[#AAAAAA] text-[0.75em] font-[600]'>Swish to:</p>
                                <p className='peer-checked:text-[#000000] text-[#AAAAAA] text-[0.75em] font-[600]'>0707721066</p>
                            </div>
                        </div>
                        <div className='w-[100%] mt-[15px] flex  gap-[6px]'>
                            <input name='collectible'
                                id='collectible' type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                            <div className='flex flex-col  mt-[-3px]'>
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[0.75em] font-[600] '>Bank transaction to:</p>
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[0.75em] font-[600] '>Handelsbanken</p>
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[0.75em] font-[600] '>0707721066</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-[25px] '>
                        <h1 className='text-[0.75em] font-[600]' >Who pays shipping? </h1>
                        <div className='flex justify-between'>
                            <div className='  mt-[15px] flex items-center gap-[6px]'>
                                <input
                                    id="buyer"
                                    name='check'
                                    type="checkbox"
                                    checked={buyerChecked}
                                    onChange={handleBuyerChange}
                                    className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                                />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Buyer</p>
                            </div>
                            <div className='  mt-[15px] flex items-center gap-[6px]'>
                                <input
                                    id="me"
                                    name='check'
                                    type="checkbox"
                                    onChange={handleMeChange}
                                    checked={meChecked}
                                    className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                                />
                                <span className='peer-checked/published:text-[#000000] inline-flex text-[#AAAAAA] text-[12px] font-[700] '>Me</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PrivateInfo