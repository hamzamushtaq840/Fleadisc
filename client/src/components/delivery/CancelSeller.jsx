import { Rating } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../api/axios'
import user from './../../assets/user.svg'

const CancelSeller = ({ setModel, disc, val }) => {
    const navigate = useNavigate()
    const [rating, setRating] = useState(0)
    const queryClient = useQueryClient()

    const cancelBuy = useMutation((data) => axios.post(`/delivery/cancel`, data), {
        onSuccess: () => {
            toast.success('Disc sale has been canceled')
            setModel(false)
            queryClient.invalidateQueries('buyingDiscs')
            queryClient.invalidateQueries('sellingCancel')
        },
        onError: (error) => {
            console.log(error);
        }
    });


    const giveRating = useMutation((data) => axios.post(`/delivery/giveRating`, data), {
        onSuccess: (res) => {
            console.log('done rating');
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const handleRemove = () => {
        cancelBuy.mutate({ from: 'sell', listingId: val, discId: disc._id, sellerId: disc.seller, buyerId: disc.buyer.user })
        if (rating !== 0) {
            giveRating.mutate({ userId: disc.buyer, rating: rating })
        }
    }

    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer py-[1em] xsm:text-[16px] sm:text-[16px] text-[20px]  sm:w-[80%] xsm:w-[80%] w-[40%] flex flex-col justify-center items-center'>
                <h1 className='text-[1.25em] '>Cancel confirm</h1>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[0.688em]'><span className='font-[800]'></span>Do you want to cancel the sale of <span className='font-[800]'>{disc.discName}</span>, <span className='font-[800]'>{disc.brand}</span></p>
                <p className='w-[80%] text-center text-[.75em] font-[400] mt-[1.5em]'>Leave a rating of <span className='font-[800]'>buyer.</span></p>
                <Rating size='large' className='mb-[20px]' name="simple-controlled" value={Number(rating)}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }} precision={0.5} />
                {disc.priceType === 'auction' && <div className='flex flex-col gap-[0.625em] items-center '>
                    <button onClick={() => navigate('/create/relist', { state: disc })} className='py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-primary button rounded-[2px]'>Offer to next bidder</button>
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
                </div>}

                <div className='flex flex-col gap-[11px] mb-[1em] mt-[.5em]'>
                    <button onClick={() => navigate('/create/relist', { state: disc })} className='buttonAnimation py-[0.625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-primary button rounded-[2px]'>Re-list</button>
                    <button onClick={handleRemove} className='py-[0.625em] buttonAnimation relative min-h-[2.4625em] text-[.75em] px-[2.813em] text-[#ffffff] bg-[#F21111] button rounded-[2px]'>
                        {(cancelBuy.isLoading || giveRating.isLoading) && (
                            <FaSpinner
                                className="animate-spin absolute inset-0 m-auto"
                                style={{ width: "1em", height: "1em" }}
                            />
                        )}
                        {!(cancelBuy.isLoading || giveRating.isLoading) && "Confirm"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default CancelSeller