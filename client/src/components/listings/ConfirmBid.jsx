import React from 'react'
import user from '../../assets/user.svg'

const ConfirmBid = ({ setModel, price, type, val }) => {
    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer xsm:text-[16px] sm:text-[16px] text-[20px] py-[40px] px-[10px] sm:w-[90%] xsm:w-[90%] w-[40%] flex flex-col justify-center items-center'>
                <div className='flex w-full justify-between px-[15px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[0.9375em] font-[500]'>{type === 'bid' ? "Bidder" : "Buyer"}</h1>
                        <div className='flex gap-[6px] items-center'>
                            <img src={user} className="h-[25px]" alt="" />
                            <p className='text-[0.75em] font-[400]'>Fred Isaksson</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px] items-center'>
                        <h1 className='text-[0.9375em] font-[500]'>Price</h1>
                        <div className='flex min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400]'>{type === 'bid' ? price : val.startingPrice}</p>
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
                <div className='flex justify-center mt-[.5em]'>
                    <button onClick={() => setModel(false)} className='button rounded-[4px] py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-primary'>{type === 'bid' ? "Confirm Bid" : "Confirm Buy"}</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmBid