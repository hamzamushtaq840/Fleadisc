import React from 'react'
import signin from '../../assets/signin.svg'
import axios from '../../api/axios'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query';
import { getCountryInfoByISO } from '../../utils/iso-country-currency';

const ConfirmBid = ({ setModel, price, type, val, currentTime, seller, clearForm }) => {
    const { auth } = useAuth();
    const fromCurrency = auth?.country ? getCountryInfoByISO(auth.country).currency.toUpperCase() : "SEK";
    const toCurrency = seller.currency.toUpperCase();
    const bidMutation = useMutation((data) => axios.post('/disc/bid', data), {
        onSuccess: () => {
            clearForm()
            setModel(false);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const buyMutation = useMutation((data) => axios.post('/disc/buy', data), {
        onSuccess: () => {
            clearForm()
            setModel(false);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const handleBid = () => {
        if (type === 'buy') {
            console.log(val.startingPrice);
            if (seller._id === auth.userId) {
                toast.error("You can't buy on your own disc");
                return;
            }
            const data = {
                listingId: val._id,
                userId: auth.userId,
                time: currentTime,
            }
            buyMutation.mutate(data)
        }
        else {
            if (seller._id === auth.userId) {
                toast.error("You can't bid on your own disc");
                return;
            }
            const data = {
                listingId: val._id,
                userId: auth.userId,
                price: price,
                time: currentTime,
                fromCurrency,
                toCurrency
            }
            bidMutation.mutate(data)
        }
    }

    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer xsm:text-[16px] sm:text-[16px] text-[20px] py-[40px] px-[10px] sm:w-[90%] xsm:w-[90%] w-[40%] flex flex-col justify-center items-center'>
                <div className='flex w-full gap-[5px] px-[15px] justify-between'>
                    <div className='flex flex-col gap-[8px] '>
                        <h1 className='text-[0.9375em] font-[500] '>{type === 'bid' ? "Bidder" : "Buyer"}</h1>
                        <div className='flex gap-[6px] items-center'>
                            <img src={auth.profilePicture !== null ? auth.profilePicture : signin} className="h-[25px]" alt="" />
                            <p className='text-[0.75em] font-[400]'>{auth.name}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]  '>
                        <h1 className='text-[0.9375em] font-[500] '>Price</h1>
                        <div className='flex min-h-[25px] items-center'>
                            <p className='text-[0.75em] font-[400]'>{type === 'bid' ? price : val.startingPrice} {fromCurrency}</p>
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
                    <button onClick={handleBid} className='button rounded-[4px] py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-primary'>{(bidMutation.isLoading || buyMutation.isLoading) ? "wait.." : type === 'bid' ? "Confirm Bid" : "Confirm Buy"}</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmBid