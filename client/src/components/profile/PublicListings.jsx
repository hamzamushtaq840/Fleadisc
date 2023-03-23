import React from 'react'
import disc from './../../assets/disc.svg'

const PublicListing = () => {

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

    return (
        <>
            <div className='mt-[1.0625em] px-[5px]'>
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
        </>
    )
}

export default PublicListing