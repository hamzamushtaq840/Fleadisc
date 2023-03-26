import React from 'react'
import user from '../../assets/user.svg'

const OlderBids = ({ setModel }) => {
    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer px-[10px] pb-[50px] py-[30px]  xsm:text-[16px] sm:text-[16px] text-[20px] sm:w-[90%] xsm:w-[90%] w-[40%]  flex flex-col justify-center items-center'>
                <h1 className='text-[1.2em] mb-[20px] font-[600] px-[15px] text-start w-full'>Older Bids</h1>
                <div className='flex w-full  justify-between px-[15px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[0.9375em] font-[500]'>Bidder</h1>
                        <div className='flex gap-[6px] items-center'>
                            <img src={user} className="h-[25px]" alt="" />
                            <p className='text-[0.75em] font-[400]'>Fred Isaksson</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]  items-center'>
                        <h1 className='text-[0.9375em] font-[500]'>Price</h1>
                        <div className='flex  min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400]'>125 kr</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[0.9375em] font-[500]'>Time</h1>
                        <div className='flex gap-[6px] min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400]'>08-12-13 23:42:12</p>
                        </div>
                    </div>

                </div>
                <div className='w-[95%] my-[15px] py-[0.3px] bg-[#323232]'></div>
                <div className='flex w-full  justify-between px-[15px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[0.9375em] font-[500]'>Bidder</h1>
                        <div className='flex gap-[6px] items-center'>
                            <img src={user} className="h-[25px]" alt="" />
                            <p className='text-[0.75em] font-[400]'>Fred Isaksson</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]  items-center'>
                        <h1 className='text-[0.9375em] font-[500]'>Price</h1>
                        <div className='flex  min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400]'>125 kr</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[0.9375em] font-[500]'>Time</h1>
                        <div className='flex gap-[6px] min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400]'>08-12-13 23:42:12</p>
                        </div>
                    </div>
                </div>
                <div className='w-[95%] my-[15px] py-[0.3px] bg-[#323232]'></div>
            </div>
        </>
    )
}

export default OlderBids