import React, { useRef, useState } from 'react'
import disc from './../../assets/disc.svg'
import user from './../../assets/user.svg'
import Rating from '@mui/material/Rating';
import swish from './../../assets/swish.svg'
import CancelBuyer from './CancelBuyer';
import { useNavigate } from 'react-router-dom';

const SingleBuyItem = ({ value }) => {
    const [model, setModel] = useState(false)
    const [addresses, setAddresses] = useState(value.buyer.address);
    const textareaRef = useRef(null);
    const navigate = useNavigate()
    const [selected, setSelected] = useState("SE");
    const [buyerChecked, setBuyerChecked] = useState(true);
    const [meChecked, setMeChecked] = useState(false);

    function handleBuyerChange(event) {
        setBuyerChecked(event.target.checked);
        setMeChecked(false);
    }

    function handleMeChange(event) {
        setMeChecked(event.target.checked);
        setBuyerChecked(false);
    }

    const handleButtonClick = () => {
        textareaRef.current.disabled = false;
        textareaRef.current.select();
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col w-full justify-start mt-[20px] gap-[1em] xsm:gap-[1.275em] sm:gap-[1.575em]'>
                <div className='flex gap-[20px] items-center'>
                    <div className='flex gap-[0.563em] '>
                        <img onClick={() => navigate('/profile/public')} src={user} className="cursor-pointer mt-[3px] xsm:h-[1.563em] sm:h-[1.563em] md:h-[1.9em] lg:h-[2em] xl:h-[2em] 2xl:h-[2em] " alt="user" />
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-[0.75em] font-[500] cursor-pointer' onClick={() => navigate('/profile/public')} >{value.seller.name}</h1>
                            <div className='ml-[-0.2em] flex gap-[5px] mb-[6px]'>
                                <Rating size='small' name="half-rating-read" onChange={(e) => console.log(e.target.value)} defaultValue={value.seller.rating} precision={0.5} readOnly />
                                <p className='text-[0.7em] font-[500]'>(23)</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'><button className='text-[#ffffff]  button rounded-[4px] text-[.75em] py-[0.5em] px-[1.125em] bg-primary '>Message Seller</button></div>
                </div>
                <div className='flex  gap-[20px] '>
                    <div className='flex flex-col items-center gap-[10px]'>
                        <div className={`flex flex-col card  mb-[10px] pb-[8px] card rounded-[8px] bg-[#ffffff] xsm:min-w-[150px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[210px] xl:min-w-[220px] 2xl:min-w-[240px] `}>
                            <img src={disc} className=' w-full' alt="" />
                            <div className='flex flex-col  justify-between px-[0.625em] pt-[0.425em]'>
                                <div className='flex  justify-between'>
                                    <div className='flex items-start'>
                                        <div className='flex flex-col mr-[0.425em]'>
                                            <h1 className='text-[0.75em] font-[700]' >{value.discName}</h1>
                                            <h1 className='text-[0.55em] font-[500] mt-[-0.413em] text-[##595959]' >{value.brand}</h1>
                                        </div>
                                        <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span className='text-[0.75em] font-[600]'>{value.startingPrice}125 kr</span>
                                        {value.bids.length === 0 && <span className='text-[0.6em] mt-[-0.313em] font-[500] text-[#595959bf] min-w-[45px]  '>Fixed Price</span>}
                                    </div>
                                </div>
                                <div className='flex flex-col '>
                                    <div className='flex mt-[5px] flex-col text-[0.55em] text-[#595959]'>
                                        <span className='font-[600]'>Ended {value.endTime} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} className='bg-[#F21111] font-[600] text-[0.75em] text-[white] rounded-[4px] py-[0.45em] px-[1em] ' onClick={() => { setModel(true) }}>Cancel Purchase</button>
                    </div>
                    <div className='flex flex-col items-center gap-[10px]'>
                        <div className={`flex flex-col card  mb-[10px] pb-[8px] card rounded-[8px] bg-[#ffffff] xsm:min-w-[150px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[210px] xl:min-w-[220px] 2xl:min-w-[240px] `}>
                            <img src={disc} className=' w-full' alt="" />
                            <div className='flex flex-col  justify-between px-[0.625em] pt-[0.425em]'>
                                <div className='flex  justify-between'>
                                    <div className='flex items-start'>
                                        <div className='flex flex-col mr-[0.425em]'>
                                            <h1 className='text-[0.75em] font-[700]' >{value.discName}</h1>
                                            <h1 className='text-[0.55em] font-[500] mt-[-0.413em] text-[##595959]' >{value.brand}</h1>
                                        </div>
                                        <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span className='text-[0.75em] font-[600]'>{value.startingPrice}125 kr</span>
                                        {value.bids.length === 0 && <span className='text-[0.6em] mt-[-0.313em] font-[500] text-[#595959bf] min-w-[45px]  '>Fixed Price</span>}
                                    </div>
                                </div>
                                <div className='flex flex-col '>
                                    <div className='flex mt-[5px] flex-col text-[0.55em] text-[#595959]'>
                                        <span className='font-[600]'>Ended {value.endTime} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} className='bg-[#F21111] font-[600] text-[0.75em] text-[white] rounded-[4px] py-[0.45em] px-[1em] ' onClick={() => { setModel(true) }}>Cancel Purchase</button>
                    </div>


                </div>
            </div>
            <div className='mt-[55px] xsm:mt-[35px] sm:mt-[35px] mb-[20px]'>
                <div className='flex gap-[0.688em] sm:h-[50px] xsm:h-[50px] h-[70px] '>
                    <div className='flex flex-col items-center '>
                        <div className={`p-[0.363em] mt-[2px] rounded-full border-[0.063em] ${value.purchaseConfirmed ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] font-[300] ${value.purchaseConfirmed ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.purchaseConfirmed ? "Seller has confirmed purchase" : "Waiting for purchase confirmation"}</h1>
                    </div>
                </div>
                <div className='flex gap-[0.688em] sm:h-[55px] xsm:h-[55px] h-[75px] '>
                    <div className='flex flex-col items-center  '>
                        <div className={`p-[0.363em] mt-[2px] rounded-full border-[0.063em] ${value.addressSent ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div className='flex w-full items-start gap-[0.875em] mt-[-0.3em]'>
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[105px] rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em] ${value.purchaseConfirmed ? 'bg-primary' : 'bg-[#81b29a4b]'} `} disabled={value.addressSent === true || value.purchaseConfirmed === false ? true : false}>{value.addressSent ? "Address Sent" : "Send Address"}</button>
                        <textarea ref={textareaRef} disabled className={`sm:w-full xsm:w-full max-h-[45px] resize-none text-[0.75em] bg-[#fafafa00] ${value.purchaseConfirmed ? 'text-[#000000]' : 'text-[#78636382]'} ${value.addressSent === true ? " overflow-hidden" : ""}`} onChange={(e) => setAddresses(e.target.value)} value={addresses} />
                        <button className={` text-[0.7em] ${value.purchaseConfirmed === true && value.addressSent === false ? 'text-[#000000] hover:underline' : 'hidden text-[#78636382]'}`} onClick={handleButtonClick} disabled={value.addressSent === true || value.purchaseConfirmed === false ? true : false}>Change</button>
                    </div>
                </div>
                <div className={`flex gap-[0.688em]  ${value.accountNo !== null ? "xsm:h-[135px] sm:h-[135px] h-[160px]" : "xsm:h-[85px] sm:h-[85px] h-[110px]"}`}>
                    <div className='flex flex-col items-center '>
                        <div className={`p-[0.363em] mt-[2px] rounded-full border-[0.063em] ${value.paymentSent ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] mb-[10px] font-[300] ${value.addressSent ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.paymentAddressConfimed === true ? value.seller.whoPayShipping === 'buyer' ? `Total cost inc shipping: 150 kr (${value.bidWonPrice} + ${value.shippingCost})` : `Total cost excluding shipping: (${value.bidWonPrice})` : "Total cost : Awaiting seller"}</h1>
                        <div className='flex flex-col  items-start '>
                            {value.accountNo !== null && <div className='flex flex-col items-start '>
                                <div className='flex gap-[0.625em]'>
                                    <div className=' flex  gap-[6px]'>
                                        <input
                                            id="buyer"
                                            name='check'
                                            type="checkbox"
                                            checked={buyerChecked}
                                            onChange={handleBuyerChange}
                                            disabled={value.paymentSent === true ? true : false}
                                            className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                                        />
                                        <div className='flex  mt-[-2px] flex-col gap-[2px]'>
                                            <p className='text-[#000000] text-[12px] font-[600]'>Swish</p>
                                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[500]'>0707721066</p>
                                        </div>
                                    </div>
                                    <div className=' flex  gap-[6px]'>
                                        <input
                                            id="me"
                                            name='check'
                                            type="checkbox"
                                            onChange={handleMeChange}
                                            checked={meChecked}
                                            disabled={value.paymentSent === true ? true : false}
                                            className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                                        />
                                        <div className='flex  mt-[-2px] flex-col gap-[2px]'>
                                            <p className='text-[#000000] text-[12px] font-[600]'>Bank transaction</p>
                                            <p className='text-[#000000] text-[12px] font-[500]'>Handelsbanken</p>
                                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[500]'>0707721066</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            <button className={`button text-[#ffffff] ${value.accountNo !== null ? "mt-[5px]" : ""} min-w-[105px] rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em] ${value.paymentAddressConfimed === true ? 'bg-primary' : 'bg-[#81b29a4b]'} `} disabled={value.paymentAddressConfimed === false || value.paymentSent === true ? true : false}>{value.paymentSent ? "Payment Sent" : "Send Payment"}</button>
                        </div>
                    </div>
                </div>
                <div className={`flex gap-[0.688em] sm:h-[45px] xsm:h-[45px] h-[75px] `}>
                    <div className='flex flex-col items-center '>
                        <div className={`p-[0.363em] mt-[2px] rounded-full border-[0.063em] ${value.paymentConfimed ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] font-[300] ${value.paymentSent ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.paymentConfimed ? "Payment confirmed by seller." : "Waiting for payment to be confirmed by seller."}</h1>
                    </div>
                </div>
                <div className={`flex gap-[0.688em] ${!value.parcelSent ? 'sm:h-[60px] xsm:h-[60px] h-[70px] ' : 'sm:h-[45px] xsm:h-[45px] h-[70px] '}`}>
                    <div className='flex flex-col items-center '>
                        <div className={`p-[0.363em] mt-[2px] rounded-full border-[0.063em] ${value.parcelSent ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div>
                        <h1 className={`text-[0.75em] font-[300] ${value.paymentConfimed ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.parcelSent ? "Parcel has been sent by seller." : "Waiting for confirmation that parcel has been sent be seller."}</h1>
                    </div>
                </div>

                <div className='flex gap-[0.688em] sm:h-[55px] xsm:h-[55px] h-[80px] '>
                    <div className='flex flex-col items-center '>
                        <div className={`p-[0.363em] mt-[2px] rounded-full border-[0.063em] ${value.parcelRecived ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                        <div className='div h-full flex flex-col'></div>
                    </div>
                    <div className='mt-[-0.3em]'>
                        <button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={() => console.log(addresses)} className={` text-[#ffffff] min-w-[105px] rounded-[8px] py-[0.5em] px-[0.906em] text-[0.75em]  ${value.parcelSent ? 'bg-primary' : 'bg-[#81b29a4b]'} `} disabled={value.parcelSent === false ? true : false}>{!value.parcelSent ? "Parcel received" : value.parcelRecived ? "Parcel received" : "Confirm received parcel"}</button>
                    </div>
                </div>
                <div className='flex gap-[0.688em] h-[50px] '>
                    <div className='flex flex-col items-center '>
                        <div className={`p-[0.363em] mt-[2px] rounded-full border-[0.063em] ${value.parcelRecived ? 'bg-[#81b29aac] border-[#81B29A33]' : 'border-[#ccc]'} `}></div>
                    </div>
                    <div >
                        <h1 className={`text-[0.75em] font-[300] ${value.parcelRecived ? 'text-[#000000]' : 'text-[#78636382]'}`}>{value.parcelRecived ? "Delievery Finished" : "Delievery Not Finished"}</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[0.75em] mb-[6px]'>Leave a rating of<span className='text-[#000000] font-[700]'> seller</span></p>
                    <Rating size='large' className='mb-[10px]' name="half-rating-read" onChange={(e) => console.log(e.target.value)} precision={0.5} />
                </div>
            </div>
            <hr className='mt-[10px] w-full mb-[15px]' />
            {model && <CancelBuyer setModel={setModel} />}
        </div >
    )
}

export default SingleBuyItem