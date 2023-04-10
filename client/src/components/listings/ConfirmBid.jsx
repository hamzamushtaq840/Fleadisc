import React from 'react'
import user from '../../assets/user.svg'
import axios from '../../api/axios'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query';

const ConfirmBid = ({ setModel, price, type, val, currentTime, seller }) => {
    const { auth } = useAuth();
    const { mutate, isLoading, isSuccess, isError, error } = useMutation((data) => axios.post('/disc/bid', data), {
        onSuccess: () => {
            setModel(false);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const handleBid = () => {
        if (seller._id === auth.userId) {
            toast.error("You can't bid on your own disc");
            return;
        }
        const data = {
            listingId: val._id,
            userId: auth.userId,
            price: price,
            time: currentTime
        }
        mutate(data)
    }

    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer xsm:text-[16px] sm:text-[16px] text-[20px] py-[40px] px-[10px] sm:w-[90%] xsm:w-[90%] w-[40%] flex flex-col justify-center items-center'>
                <div className='flex w-full gap-[5px] px-[15px] justify-between'>
                    <div className='flex flex-col gap-[8px] '>
                        <h1 className='text-[0.9375em] font-[500] '>{type === 'bid' ? "Bidder" : "Buyer"}</h1>
                        <div className='flex gap-[6px] items-center'>
                            <img src={user} className="h-[25px]" alt="" />
                            <p className='text-[0.75em] font-[400]'>Fred Isaksson</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px] items-center'>
                        <h1 className='text-[0.9375em] font-[500] text-center'>Price</h1>
                        <div className='flex min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400]'>{type === 'bid' ? price : val.startingPrice}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <h1 className='text-[0.9375em] font-[500] text-center'>Time</h1>
                        <div className='flex gap-[6px] min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400] text-center'>{currentTime}</p>
                        </div>
                    </div>
                </div>
                <div className='w-[95%] my-[15px] py-[0.3px] bg-[#323232]'></div>
                <div className='flex justify-center mt-[.5em]'>
                    <button onClick={handleBid} className='button rounded-[4px] py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-primary'>{isLoading ? "wait.." : type === 'bid' ? "Confirm Bid" : "Confirm Buy"}</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmBid