import { Rating } from '@mui/material'
import React, { useState } from 'react'
import user from './../../assets/user.svg'
import swish from './../../assets/swish.svg'
import disc from './../../assets/disc.svg'
import { useNavigate } from 'react-router-dom'

const PrivateProfile = () => {

    const [buyerChecked, setBuyerChecked] = useState(false);
    const [meChecked, setMeChecked] = useState(false);
    const navigate = useNavigate()
    const activeDiscs = [
        {
            discimage: null,
            quantity: 1,
            discName: 'Annax',
            brand: 'Discart',
            range: 'xyz',
            condition: 8,
            optionalDetails: {
                plastic: null,
                grams: null,
                named: false,
                dyed: false,
                blank: false,
                glow: false,
                collectible: false,
                firstRun: false,
                auction: false,
                fixedPrice: false,
            },
            startingPrice: 125,
            minPrice: '',
            endTime: '02:20PM 23 OKt',
        },
        {
            discimage: null,
            quantity: 1,
            discName: 'Annax',
            brand: 'Discart',
            range: 'xyz',
            condition: 8,
            optionalDetails: {
                plastic: null,
                grams: null,
                named: false,
                dyed: false,
                blank: false,
                glow: false,
                collectible: false,
                firstRun: false,
                auction: false,
                fixedPrice: false,
            },
            startingPrice: 125,
            minPrice: '',
            endTime: '02:20PM 23 OKt',
        },
        {
            discimage: null,
            quantity: 1,
            discName: 'Annax',
            brand: 'Discart',
            range: 'xyz',
            condition: 8,
            optionalDetails: {
                plastic: null,
                grams: null,
                named: false,
                dyed: false,
                blank: false,
                glow: false,
                collectible: false,
                firstRun: false,
                auction: false,
                fixedPrice: false,
            },
            startingPrice: 125,
            minPrice: '',
            endTime: '02:20PM 23 OKt',
        },

    ]

    function handleBuyerChange(event) {
        setBuyerChecked(event.target.checked);
        setMeChecked(false);
    }

    function handleMeChange(event) {
        setMeChecked(event.target.checked);
        setBuyerChecked(false);
    }

    return (
        <div className='mx-[2.575em] flex flex-col  sm:mx-[1rem] xsm:mx-[1rem] sm:my-[1.25rem] xsm:my-[1.25rem] text-[1.3rem] sm:text-[1rem] xsm:text-[1rem] my-[2.25em]'>
            <div className='flex gap-[0.938em] xsm:justify-start sm:justify-start justify-center  md:gap-[1.5em]  lg:gap-[3.4em] xl:gap-[4em] 2xl:gap-[4em] '>
                <div className='flex flex-col'>
                    <img src={user} className="xsm:h-[3.125em] sm:h-[3.125em] md:h-[3.725em] lg:h-[3.725em] 2xl:h-[3.725em] " alt="user" />
                    <Rating size='small' name="half-rating-read" defaultValue="3.5" precision={0.5} readOnly />
                </div>
                <div className='flex flex-col justify-between  '>
                    <div>
                        <h1 className='text-[0.75em] font-[700] ' >Fred Isaksson</h1>
                        <h1 className='text-[0.5em] font-[500] text-[#595959bf]' >Joined 2022</h1>
                    </div>
                    <div>
                        <h1 className='text-[0.75em] font-[700] mt-[1em] ' >Address</h1>
                        <p className='text-[0.5em]  font-[500] text-[#595959bf]' >Adress Tullgarsgatan 27 753 17 Uppsala </p>
                    </div>
                </div>
                <div className='flex flex-col justify-between ml-[em] '>
                    <button className='text-[#ffffff] rounded-[2px] button text-[.75em] py-[0.375em] px-[1em] bg-primary '>Edit</button>
                    <div>
                        <h1 className='text-[0.75em] font-[700] min-w-[100px] ' >Phone Number</h1>
                        <h1 className='text-[0.5em] font-[500] text-[#595959bf]' >0707721066</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center xsm:justify-start sm:justify-start xsm:mt-[20px] sm:mt-[20px] mt-[30px]'>
                <div className='flex justify-between w-full  max-w-[600px] '>
                    <div className='flex flex-col'>
                        <h1 className='flex text-[0.85em]'>Who pays shipping?</h1>
                        <div className='flex  justify-between'>
                            <div className='  mt-[15px] flex items-center gap-[6px]'>
                                <input
                                    id="buyer"
                                    name='check'
                                    type="checkbox"
                                    checked={buyerChecked}
                                    onChange={handleBuyerChange}
                                    className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                                />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Buyer</p>
                            </div>
                            <div className=' justify-end  mt-[15px] flex items-center gap-[6px]'>
                                <input
                                    id="me"
                                    name='check'
                                    type="checkbox"
                                    onChange={handleMeChange}
                                    checked={meChecked}
                                    className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                                />
                                <span className='peer-checked/published:text-[#000000] inline-flex text-[#AAAAAA] text-[12px] font-[700] '>Me</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:max-w-[150px] xsm:max-w-[150px]  flex-col'>
                        <h1 className='flex text-[0.85em]'>Accepted payments</h1>
                        <div className='flex flex-wrap'>
                            <div className='   flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <img src={swish} alt="" />
                            </div>
                            <div className=' justify-end   flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <span className='peer-checked/published:text-[#000000] inline-flex text-[#AAAAAA] text-[12px] font-[700] '>Bank transaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[2.0625em] px-[5px]'>
                <h1 className='font-[700] text-[1.25em] mb-[15px] '>Active Listings</h1>
                <div className='flex flex-wrap  gap-[1.8625em] xsm:gap-[1.0625em]  sm:gap-[1.0625em]'>
                    {activeDiscs.map((value, index) => {
                        return (
                            <div className='flex card rounded-[8px] bg-[#ffffff] flex-wrap min-w-[150px] w-[30%] max-w-[230px] flex-col'>
                                <img src={disc} className=' w-full' alt="" />
                                <div className='flex justify-between px-[0.625em] py-[0.425em]'>
                                    <div className='flex  flex-col justify-between'>

                                        <div className='flex items-start '>
                                            <div className='flex flex-col  mr-[0.425em]'>
                                                <h1 className='text-[0.75em] font-[700] ' >{value.discName}</h1>
                                                <h1 className='text-[0.5em] font-[500] mt-[-0.413em]  text-[##595959]' >{value.brand}</h1>
                                            </div>
                                            <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                                        </div>
                                        <div className='flex mt-[5px] flex-col text-[0.5em]  text-[#595959]'>
                                            <span className='font-[600]'>{value.endTime}</span>
                                            <span className='font-[500] text-[#595959BF]'>23h 23 min</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-between'>
                                        <button className='text-[0.5em] px-[0.4375em] py-[0.125em] border-[#595959] border-[1px] rounded-[6px]'>Follow</button>

                                        <div className='flex   flex-col'>
                                            <span className='text-[0.75em]  font-[600]'>{value.startingPrice}</span>
                                            <span className='text-[0.5em] font-[500]  text-[#595959bf]'>Final price</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-[10px] '>
                                    <button onClick={() => navigate('/create/edit')} className='w-full py-[.3em] rounded-[4px] text-[#ffffff] bg-primary mb-[0.6em] text-[0.75em] '>Edit</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mt-[2.0625em] px-[5px]'>
                <h1 className='font-[700] text-[1.25em] mb-[15px] '>Finished Listings</h1>
                <div className='flex flex-wrap  gap-[1.8625em] xsm:gap-[1.0625em]  sm:gap-[1.0625em]'>
                    {activeDiscs.map((value, index) => {
                        return (
                            <div className='flex card rounded-[8px] bg-[#ffffff] flex-wrap min-w-[150px] w-[30%] max-w-[230px] flex-col'>
                                <img src={disc} className=' w-full' alt="" />
                                <div className='flex justify-between px-[0.625em] py-[0.425em]'>
                                    <div className='flex  flex-col justify-between'>

                                        <div className='flex items-start '>
                                            <div className='flex flex-col  mr-[0.425em]'>
                                                <h1 className='text-[0.75em] font-[700] ' >{value.discName}</h1>
                                                <h1 className='text-[0.5em] font-[500] mt-[-0.413em]  text-[##595959]' >{value.brand}</h1>
                                            </div>
                                            <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                                        </div>
                                        <div className='flex mt-[5px] flex-col text-[0.5em]  text-[#595959]'>
                                            <span className='font-[600]'>{value.endTime}</span>
                                            <span className='font-[500] text-[#595959BF]'>23h 23 min</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-between'>
                                        <button className='text-[0.5em] px-[0.4375em] py-[0.125em] border-[#595959] border-[1px] rounded-[6px]'>Follow</button>

                                        <div className='flex   flex-col'>
                                            <span className='text-[0.75em]  font-[600]'>{value.startingPrice}</span>
                                            <span className='text-[0.5em] font-[500]  text-[#595959bf]'>Final price</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mt-[2.0625em] px-[5px]'>
                <h1 className='font-[700] text-[1.25em] mb-[15px] '>Bought Listings</h1>
                <div className='flex flex-wrap  gap-[1.8625em] xsm:gap-[1.0625em]  sm:gap-[1.0625em]'>
                    {activeDiscs.map((value, index) => {
                        return (
                            <div className='flex card rounded-[8px] bg-[#ffffff] flex-wrap min-w-[150px] w-[30%] max-w-[230px] flex-col'>
                                <img src={disc} className=' w-full' alt="" />
                                <div className='flex justify-between px-[0.625em] py-[0.425em]'>
                                    <div className='flex  flex-col justify-between'>

                                        <div className='flex items-start '>
                                            <div className='flex flex-col  mr-[0.425em]'>
                                                <h1 className='text-[0.75em] font-[700] ' >{value.discName}</h1>
                                                <h1 className='text-[0.5em] font-[500] mt-[-0.413em]  text-[##595959]' >{value.brand}</h1>
                                            </div>
                                            <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                                        </div>
                                        <div className='flex mt-[5px] flex-col text-[0.5em]  text-[#595959]'>
                                            <span className='font-[600]'>{value.endTime}</span>
                                            <span className='font-[500] text-[#595959BF]'>23h 23 min</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-between'>
                                        <button className='text-[0.5em] px-[0.4375em] py-[0.125em] border-[#595959] border-[1px] rounded-[6px]'>Follow</button>

                                        <div className='flex   flex-col'>
                                            <span className='text-[0.75em]  font-[600]'>{value.startingPrice}</span>
                                            <span className='text-[0.5em] font-[500]  text-[#595959bf]'>Final price</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default PrivateProfile