import { Rating } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import axios from '../../api/axios';
import { FaSpinner } from 'react-icons/fa';

const CancelBuyer = ({ setModel, temp, disc }) => {
    const queryClient = useQueryClient()

    const cancelBuy = useMutation((data) => axios.post(`/delivery/cancel`, data), {
        onSuccess: () => {
            queryClient.invalidateQueries('buyingDiscs')
            queryClient.invalidateQueries('sellingCancel')
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const handleDiscCancel = () => {
        cancelBuy.mutate({ from: 'buy', listingId: temp._id, discId: disc._id, sellerId: disc.seller, buyerId: disc.buyer.user })
        toast.success('Disc purchase has been canceled')
        setModel(false)
    }

    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer xsm:text-[16px] sm:text-[16px] text-[20px] sm:h-[35%] sm:w-[80%] xsm:w-[80%] xsm:h-[35%] h-[40%] w-[40%] flex flex-col justify-center items-center'>
                <h1 className='text-[1.25em] '>Cancel confirm</h1>
                <p className='w-[80%] text-[.75em] text-center font-[400] mt-[0.688em]'>{temp.paymentSent === true ? "Payment has been sent are you sure you want to cancel" : "Cancel"} the purchase of <span className='font-[800]'>{disc.discName}</span>, <span className='font-[800]'>{disc.brand}</span></p>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[1.5em]'>Leave a rating of <span className='font-[800]'>seller.</span></p>
                <Rating size='large' className='mb-[10px]' name="half-rating-read" onChange={(e) => console.log(e.target.value)} precision={0.5} />
                <button onClick={handleDiscCancel} className='py-[0.625em] relative min-h-[2.0625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-[#F21111]'>
                    {cancelBuy.isLoading && (
                        <FaSpinner
                            className="animate-spin absolute inset-0 m-auto"
                            style={{ width: "1em", height: "1em" }}
                        />
                    )}
                    {!cancelBuy.isLoading && "Cancel"}
                </button>
            </div>
        </>
    )
}

export default CancelBuyer