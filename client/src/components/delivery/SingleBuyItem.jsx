import React, { useRef, useState } from 'react'
import disc from './../../assets/disc.svg'
import user from './../../assets/user.svg'
import Rating from '@mui/material/Rating';

const SingleBuyItem = ({ value }) => {

    const [addresses, setAddresses] = useState(value.buyer.address);
    const textareaRef = useRef(null);


    const handleButtonClick = () => {
        textareaRef.current.disabled = false;
        textareaRef.current.select();
    };


    return (
        <>
            <div className='flex justify-between mt-[10px]  gap-[1.875em]  '>
                <img src={disc} className='h-[9.375em] rounded-[8px] w-[9.375em]' alt="disc image" />
                <div className='flex flex-col flex-1'>
                    <div className='flex items-start'>
                        <div className='flex flex-col    mr-[0.625em]'>
                            <h1 className='text-[0.75em] font-[700] ' >{value.discName}</h1>
                            <h1 className='text-[0.5em] font-[500] mt-[-0.613em]  text-[#595959bf]' >{value.brand}</h1>
                        </div>
                        <span className='px-[0.5em] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                    </div>

                    <div className='mt-[0.313em]  items-end flex gap-[1.25em] '>
                        <div className='flex flex-col text-[0.5em]  text-[#595959]'>
                            <span>Ended</span>
                            <span>{value.endTime}</span>
                        </div>

                        <div className='flex flex-col justify-start '>
                            <span className='text-[0.75em]  font-[600]'>{value.bidWonPrice}</span>
                            <span className='text-[0.5em] font-[500] min-w-[40px] text-[#595959bf]'>Final price</span>
                        </div>
                    </div>

                    <div className='flex  gap-[0.563em]  mt-[1.063em]'>
                        <img src={user} className="h-[1.563em] w-[1.563em]" alt="user" />
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-[0.75em] font-[500]'>{value.seller.name}</h1>
                            <div className='ml-[-0.2em]'>
                                <Rating size='small' name="half-rating-read" onChange={(e) => console.log(e.target.value)} defaultValue={value.seller.rating} precision={0.5} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[20px] mb-[20px]'>
                <div className='flex gap-[0.688em] h-[50px] '>
                    <div className='flex flex-col items-center  '>
                        <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.purchaseConfirmed ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] font-[300]  ${value.purchaseConfirmed ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.purchaseConfirmed ? "Seller has confirmed purchase" : "Waiting for purchase confirmation"}</h1>
                    </div>
                </div>
                <div className='flex  gap-[0.688em] min-h-[55px] '>
                    <div className='flex flex-col items-center   '>
                        <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.addressSent ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div className='flex w-full items-start gap-[0.875em]  mt-[-0.3em]'>
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[105px]  rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em]  ${value.purchaseConfirmed ? 'bg-primary' : 'bg-[#81b29a4b]'} `} disabled={value.addressSent === true || value.purchaseConfirmed === false ? true : false}>{value.addressSent ? "Address Sent" : "Send Address"}</button>
                        <textarea ref={textareaRef} disabled className={`w-[50%] resize-none text-[0.75em] bg-[#fafafa00]  ${value.purchaseConfirmed ? 'text-[#000000]' : 'text-[#78636382]'}`} onChange={(e) => setAddresses(e.target.value)} value={addresses} />
                        <button className={` text-[0.5em]  mt-[2em] ${value.purchaseConfirmed ? 'text-[#000000]' : 'text-[#78636382]'}`} onClick={handleButtonClick} disabled={value.addressSent === true || value.purchaseConfirmed === false ? true : false}>Change</button>
                    </div>
                </div>
                <div className='flex gap-[0.688em] h-[85px] '>
                    <div className='flex flex-col items-center  '>
                        <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.paymentSent ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] mb-[10px] font-[300]  ${value.addressSent ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.paymentAddressConfimed === true ? value.seller.whoPayShipping === 'buyer' ? `Total cost inc shipping: 150 kr (${value.bidWonPrice} + ${value.shippingCost})` : `Total cost excluding shipping: (${value.bidWonPrice})` : "Total cost : Awaiting seller"}</h1>
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log('jj')} className={` text-[#ffffff] min-w-[105px]  rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em]  ${value.paymentAddressConfimed === true ? 'bg-primary' : 'bg-[#81b29a4b]'} `} disabled={value.paymentAddressConfimed === false || value.paymentSent === true ? true : false}>{value.paymentSent ? "Payment Sent" : "Send Payment"}</button>
                    </div>
                </div>
                <div className={`flex gap-[0.688em] h-[45px] `}>
                    <div className='flex flex-col items-center  '>
                        <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.paymentConfimed ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] font-[300]  ${value.paymentConfimed ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.paymentConfimed ? "Payment confirmed by seller." : "Waiting for payment to be confirmed by seller."}</h1>
                    </div>
                </div>
                <div className={`flex gap-[0.688em]  ${!value.parcelSent ? 'h-[60px]' : 'h-[45px]'}`}>
                    <div className='flex flex-col items-center  '>
                        <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.parcelSent ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] font-[300]  ${value.parcelSent ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.parcelSent ? "Parcel has been sent by seller." : "Waiting for confirmation that parcel has been sent be seller."}</h1>
                    </div>
                </div>

                <div className='flex gap-[0.688em] h-[55px] '>
                    <div className='flex flex-col items-center  '>
                        <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.parcelRecived ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div className='mt-[-0.3em]'>
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[105px]  rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em]   ${value.parcelSent ? 'bg-primary' : 'bg-[#81b29a4b]'} `} disabled={value.parcelSent === false ? true : false}>{!value.parcelSent ? "Parcel received" : value.parcelRecived ? "Parcel received" : "Confirm received parcel"}</button>
                    </div>
                </div>
                <div className='flex gap-[0.688em] h-[50px] '>
                    <div className='flex flex-col items-center  '>
                        <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.parcelRecived ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                    </div>
                    <div >
                        <h1 className={`text-[0.75em] font-[300]  ${value.parcelRecived ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.parcelRecived ? "Delievery Finished" : "Delievery Not Finished"}</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[0.75em] mb-[6px]'>Leave a rating of<span className='text-[#000000] font-[700]'> seller</span></p>
                    <Rating size='large' className='mb-[10px]' name="half-rating-read" onChange={(e) => console.log(e.target.value)} precision={0.5} />
                    <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} className='bg-[#F21111] text-[0.75em] text-[white] rounded-[4px] py-[0.35em] px-[1em] '>Cancel Purchase</button>
                </div>
            </div>
            <hr className='mb-[30px]' />
        </>
    )
}

export default SingleBuyItem