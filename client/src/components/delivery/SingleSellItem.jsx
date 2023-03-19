import React, { useRef, useState } from 'react'
import disc from './../../assets/disc.svg'
import user from './../../assets/user.svg'
import swish from './../../assets/swish.svg'
import Rating from '@mui/material/Rating';
import CancelSeller from './CancelSeller';

const SingleSellItem = ({ value }) => {

    const [accountNo, setAccountNo] = useState(value.seller.paymentCardNo);
    const [shippingCost, setshippingCost] = useState(null);
    const textareaRef = useRef(null);
    const [model, setModel] = useState(false)



    const handleButtonClick = () => {
        textareaRef.current.disabled = false;
        textareaRef.current.select();
    };

    return (
        <>
            <div className='flex flex-col '>
                <div className='flex w-full  mt-[20px] gap-[1.875em]  '>

                    <img src={disc} className='sm:h-[9.375em] xsm:h-[9.375em] rounded-[8px] md:h-[11em] h-[12em]' alt="disc image" />
                    <div className='flex max-w-[30%]  flex-col  flex-1 ml-[3rem] sm:ml-[0] xsm:ml-[0] md:ml-[0]'>
                        <div className='  flex flex-col    min-w-[150px] h-full justify-between'>
                            <div className='flex items-start '>
                                <div className='flex flex-col  mr-[0.625em]'>
                                    <h1 className='text-[0.85em] font-[700] ' >{value.discName}</h1>
                                    <h1 className='text-[0.7em] font-[500] mt-[-0.413em]  text-[#595959bf]' >{value.brand}</h1>
                                </div>
                                <span className='px-[0.5em] mt-[3px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                            </div>

                            <div className=' justify-between  w-full  items-end flex  '>
                                <div className='flex flex-col text-[0.5em]  text-[#595959]'>
                                    <span>Ended</span>
                                    <span>{value.endTime}</span>
                                </div>

                                <div className='flex flex-col justify-start '>
                                    <span className='text-[0.75em]  font-[600]'>{value.bidWonPrice}</span>
                                    <span className='text-[0.5em] font-[500] min-w-[40px] text-[#595959bf]'>Final price</span>
                                </div>
                            </div>

                            <div className='flex gap-[0.563em] mt-[1.063em]'>
                                <img src={user} className="xsm:h-[1.563em] sm:h-[1.563em] md:h-[1.9em] lg:h-[2em] 2xl:h-[2em] " alt="user" />
                                <div className='flex flex-col justify-start'>
                                    <h1 className='text-[0.75em] font-[500]'>{value.seller.name}</h1>
                                    <div className='ml-[-0.2em]'>
                                        <Rating size='small' name="half-rating-read" onChange={(e) => console.log(e.target.value)} defaultValue={value.seller.rating} precision={0.5} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className='flex'><button className='text-[#ffffff] w-full xsm:w-auto sm:w-auto button rounded-[4px]  text-[.75em] py-[0.375em] px-[1em] bg-primary '>Message </button></div>

                        </div>
                    </div>
                </div>

                <div className='mt-[55px] xsm:mt-[35px] sm:mt-[35px] mb-[20px]'>
                    <div className='flex gap-[0.688em] xsm:h-[55px] sm:h-[55px] h-[65px]'>
                        <div className='flex flex-col items-center  '>
                            <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.purchaseConfirmed ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                            <div className='div h-full flex flex-col'></div>
                        </div>
                        <div className='mt-[-0.3em]'>
                            <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[105px]  rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em] bg-primary`} disabled={value.purchaseConfirmed === true ? true : false}>{value.purchaseConfirmed ? "Purchased Confirmed" : "Confirm Purchase"}</button>
                        </div>
                    </div>

                    <div className={`flex ${value.addressSent ? "xsm:h-[65px] sm:h-[65px] h-[85px]" : "xsm:h-[50px] sm:h-[50px] h-[55px]"}  gap-[0.688em]  `}>
                        <div className='flex flex-col items-center   '>
                            <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.addressSent === true ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                            <div className='div h-full flex flex-col'></div>
                        </div>
                        <div className='flex flex-col w-full items-start gap-[0em]  '>
                            <h1 className={`text-[0.75em] font-[300]  ${value.purchaseConfirmed ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.addressSent === true ? "Buyer adress : " : "Waiting for address from buyer."}</h1>
                            {value.addressSent === true && <p className=' text-[#000000B2] text-[0.75em]'>{value.address}</p>}
                        </div>
                    </div>

                    <div className='flex gap-[0.688em] h-[6.25em] sm:h-[6.25em] '>
                        <div className='flex flex-col items-center  '>
                            <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.paymentAddressConfimed ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                            <div className='div h-full flex flex-col'></div>
                        </div>
                        <div className={`${value.paymentAddressConfimed === true ? "mt-[0em]" : 'mt-[-0.2em]'}`}>
                            <div>
                                {(value.seller.whoPayShipping === 'buyer' && value.paymentAddressConfimed === false) && <input type="number" min={0} value={shippingCost} onChange={(e) => setshippingCost(Number(e.target.value))} className={`${value.addressSent === true ? '' : 'hidden'} border-[#595959] border-[1px] text-[0.75em]  sm:w-[10.625em] xsm:w-[10.625em] h-[40px] rounded-[2px] xsm:h-[1.875em] sm:h-[1.875em] pl-[7px]`} placeholder='Shipping Cost' />}
                                {value.seller.whoPayShipping === 'me' && <span className={`text-[0.75em] ml-32  ${value.paymentAddressConfimed ? 'text-[#000000]' : 'text-[#78636382]'}`}>Total : {value.bidWonPrice}</span>}
                                {(value.seller.whoPayShipping === 'buyer' && value.paymentAddressConfimed === false) &&
                                    <span className={`text-[0.75em]  ${value.addressSent ? 'text-[#000000] ml-[10px] ' : 'text-[#78636382]'}`}>
                                        Total : {value.bidWonPrice + Number(shippingCost)}
                                        {(shippingCost !== 0 && shippingCost !== null) ?
                                            " ( " + value.bidWonPrice + " + " + shippingCost + " )" : null}
                                    </span>}
                                {(value.paymentAddressConfimed === true && value.seller.whoPayShipping === 'buyer') && <p className='text-[0.75em]'>Total cost inc shipping : {value.bidWonPrice} ( {value.bidWonPrice} + {value.shippingCost} )</p>}
                            </div>
                            <div className='flex  items-start gap-[0.875em] mt-[0.5em]'>
                                <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[170px]  rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em]   ${value.addressSent ? 'bg-primary' : 'bg-[#81b29a4b]'} `} disabled={value.paymentAddressConfimed === false ? false : true}>{value.paymentAddressConfimed ? "Payment requested" : "Send payment request"}</button>
                                {value.addressSent && <div className='flex  flex-col'>
                                    <div className='flex items-center '>
                                        <div className='flex flex-col  items-start justify-start'>
                                            <input ref={textareaRef} disabled className={`w-[100%] text-[0.75em] bg-[#fafafa00]  ${value.addressSent ? 'text-[#000000]' : 'text-[#78636382]'}  ${value.addressSent === true ? " overflow-hidden" : ""}`} onChange={(e) => setAccountNo(e.target.value)} value={accountNo} />
                                            <img src={swish} className='w-[3.75em] h-[2.5em]  mt-[-.7em]' alt="" />
                                        </div>
                                        <button className={`pb-[1.1em] text-[0.6em] ${value.paymentAddressConfimed === true || value.addressSent === false ? 'hidden' : 'text-[#000000] hover:underline '}`} onClick={handleButtonClick} disabled={value.paymentAddressConfimed === true || value.addressSent === false ? true : false}>Change</button>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[0.688em] xsm:h-[60px] sm:h-[60px] h-[75px] '>
                        <div className='flex flex-col items-center  '>
                            <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.paymentConfimed ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                            <div className='div h-full flex flex-col'></div>
                        </div>
                        <div className='mt-[-0.3em]'>
                            <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[105px]  rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em] ${value.paymentSent ? 'bg-primary' : 'bg-[#81b29a4b]'}`} disabled={(value.paymentSent === true && value.paymentConfimed === false) ? false : true}>{value.paymentConfimed ? "Payment Confirmed" : "Confirm Payment"}</button>
                        </div>
                    </div>


                    <div className='flex gap-[0.688em] xsm:h-[60px] sm:h-[60px] h-[75px]  '>
                        <div className='flex flex-col items-center  '>
                            <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.parcelSent ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                            <div className='div h-full flex flex-col'></div>
                        </div>
                        <div className='mt-[-0.3em]'>
                            <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[105px]  rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em] ${value.paymentConfimed ? 'bg-primary' : 'bg-[#81b29a4b]'}`} disabled={(value.paymentConfimed === false || value.parcelSent === true) ? true : false}>{value.parcelSent ? "Parcel has been sent" : "Confirm sent parcel "}</button>
                        </div>
                    </div>

                    <div className='flex gap-[0.688em] xsm:h-[60px] sm:h-[60px] h-[75px] '>
                        <div className='flex flex-col items-center  '>
                            <div className={`p-[0.463em] rounded-full border-[0.063em]  ${value.parcelRecived ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                            <div className='div h-full flex flex-col'></div>
                        </div>
                        <div>
                            <h1 className={`text-[0.75em] font-[300]  ${value.parcelRecived ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.parcelRecived ? "Parcel has been recieved." : "Waiting for confirmation that parcel has been recieved. "}</h1>
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
                        <Rating size="large" className='mb-[10px]' name="half-rating-read" onChange={(e) => console.log(e.target.value)} precision={0.5} />
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} className='bg-[#F21111] text-[0.75em] text-[white] rounded-[4px] py-[0.35em] px-[1em] ' onClick={() => { setModel(true) }}>Cancel Purchase</button>
                    </div>
                </div>
                {model && <CancelSeller setModel={setModel} />}

            </div>
            <hr className='mt-[40px] mb-[60px]' />
        </>
    )
}

export default SingleSellItem