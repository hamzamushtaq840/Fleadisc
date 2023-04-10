import React from 'react'
import user from '../../assets/signin.svg'
import useAuth from '../../hooks/useAuth';
import { getCountryInfoByISO } from '../../utils/iso-country-currency';
import { useQuery } from '@tanstack/react-query';
import axios from '../../api/axios';
import { ColorRing } from 'react-loader-spinner';

const Loader =
    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} className=''>
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#494949', '#494949', '#494949', '#494949', '#494949']}
        />
    </div>

const OlderBids = ({ setModel, discId }) => {
    const { auth } = useAuth();
    const userCurrency = auth?.country ? getCountryInfoByISO(auth.country).currency.toUpperCase() : "SEK";
    const { isLoading, error, data } = useQuery(['bids', discId, userCurrency], async () => {
        const response = await axios.get(`/disc/getBids/${discId}/bids`, { params: { userCurrency } });
        return response.data;
    });

    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer px-[10px] pb-[50px] py-[30px]  xsm:text-[16px] sm:text-[16px] text-[20px] sm:w-[90%] xsm:w-[90%] w-[40%]  flex flex-col justify-center items-center'>
                <h1 className='text-[1.2em] mb-[20px] font-[600] px-[15px] text-start w-full'>Older Bids</h1>
                {isLoading ? (
                    <div style={{ position: "relative", minHeight: "200px" }}>
                        {Loader}
                    </div>
                ) : (
                    <div className='flex flex-col w-[92%] px-[5px] overflow-y-auto max-h-[250px]'>
                        {data?.map((bid, index) => {
                            return (
                                <>
                                    <div key={discId} className='flex w-full justify-between gap-[15px]'>
                                        <div className='flex flex-col gap-[8px]'>
                                            <h1 className='text-[0.9375em] font-[500]'>Bidder</h1>
                                            <div className='flex gap-[6px] items-center'>
                                                <img src={bid.user.profilePicture !== null ? bid.user.profilePicture : user} className="h-[25px]" alt="" />
                                                <p className='text-[0.75em] font-[400]'>{bid.user.name}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[8px]  items-center'>
                                            <h1 className='text-[0.9375em] font-[500]'>Price</h1>
                                            <div className='flex  min-h-[25px] items-center'>
                                                <p className='text-[0.75em] font-[400] text-center'>{bid.bidPrice} {userCurrency}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[8px]'>
                                            <h1 className='text-[0.9375em] font-[500] text-center'>Time</h1>
                                            <div className='flex gap-[6px] min-h-[25px] items-center'>
                                                <p className='text-[0.75em] font-[400] text-center'>{bid.createdAt}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='w-[95%] my-[15px] py-[0.3px] bg-[#323232]'></div>
                                </>
                            )
                        })}
                    </div>)}

            </div>
        </>
    )
}

export default OlderBids