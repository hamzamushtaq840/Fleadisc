import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { Us } from "react-flags-select";
import SingleList from '../components/listings/SingleList';

const Listing = () => {
    const [selected, setSelected] = useState("");
    const [moreFilters, setMoreFilters] = useState(false)

    const [listings, setListings] = useState([
        {
            userId: 9898,
            name: 'Fred Isaksson',
            rating: 5,
            image: null,
            activelistings: [
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: true,
                    dyed: true,
                    blank: true,
                    glow: true,
                    collectible: true,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-02",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-29",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: 'Plastic',
                    grams: '174',
                    named: true,
                    dyed: true,
                    blank: true,
                    glow: true,
                    collectible: true,
                    firstRun: true,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: true,
                    dyed: false,
                    blank: true,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: []
                },
            ]
        },
        {
            userId: 9898,
            name: 'Fred Isaksson',
            rating: 5,
            image: null,
            activelistings: [
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: true,
                    dyed: true,
                    blank: true,
                    glow: true,
                    collectible: true,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-02",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-29",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: 'Plastic',
                    grams: '174',
                    named: true,
                    dyed: true,
                    blank: true,
                    glow: true,
                    collectible: true,
                    firstRun: true,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: true,
                    dyed: false,
                    blank: true,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: []
                },
            ]
        },
        {
            userId: 9898,
            name: 'Fred Isaksson',
            rating: 5,
            image: null,
            activelistings: [
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: true,
                    dyed: true,
                    blank: true,
                    glow: true,
                    collectible: true,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-02",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-29",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: 'Plastic',
                    grams: '174',
                    named: true,
                    dyed: true,
                    blank: true,
                    glow: true,
                    collectible: true,
                    firstRun: true,
                    priceType: 'fixedPrice',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-04-22",
                    endTime: "12:35",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: false,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: [{ sa: 1 }, { bd: 1 }]
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: true,
                    dyed: false,
                    blank: true,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: []
                },
                {
                    discimage: null,
                    quantity: 1,
                    discName: "Annax",
                    brand: 'Discart',
                    range: null,
                    condition: 8,
                    plastic: '',
                    grams: '174',
                    named: false,
                    dyed: true,
                    blank: false,
                    glow: true,
                    collectible: false,
                    firstRun: true,
                    priceType: 'auction',
                    startingPrice: 125,
                    minPrice: 130,
                    endDay: "2023-03-24",
                    endTime: "13:48",
                    bids: []
                },
            ]
        },

    ])

    return (
        <div className=' w-full m-auto text-[1.2rem] sm:text-[1rem] xsm:text-[1rem]'>
            <div className='listingBackgroundImage flex justify-center h-[35vw] min-h-[135px] max-h-[300px] bg-[rgba(0,0,0,0.1)] relative'>
                <h1 className='text-[35px] sm:text-[25px] xsm:text-[25px] md:text-[30px] leading-[34.9px] text-[white] font-logo text-center relative z-10 mt-[clamp(50px,10vw,110px)]'>Give a disc a second arm</h1>
                <input style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='border-[1px] w-[64.10vw] max-w-[500px] min-w-[250px] border-[#81B29A] absolute bottom-[-24px] bg-[white] z-10 h-[47px] rounded-lg px-[14px] font-sans' type='text' placeholder='Search...'></input>
            </div>
            <div className='mt-[35px] flex gap-[10px] xsm:gap-[5px] items-center justify-center'>
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    showSelectedLabel={false}
                    showOptionLabel={false}
                    placeholder={<Us />}
                    optionsSize={32}
                    className="border-0 "
                    selectedSize={32}
                />
                <select className='outline-none w-[74px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option selected disabled value={null}>Range</option>
                </select>
                <select className='outline-none w-[76px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option selected disabled value={null}>Brand</option>
                </select>
                <select className='outline-none w-[92px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option selected disabled value={null}>Condition</option>
                </select>
            </div>
            <div className='px-[5px] xsm:px-0 flex gap-[10px] xsm:gap-[5px] items-center justify-start flex-wrap xsm:w-[320px] w-[340px] m-auto'>
                <button className='w-[57px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>New</button>
                <button className='w-[66px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Popular</button>
                <button className='w-[99px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Short on time</button>
                <button className='w-[77px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Following</button>
                {moreFilters && <>
                    <button className='w-[74px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Named</button>
                    <button className='w-[79px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Unamed</button>
                    <button className='w-[50px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Dyed</button>
                    <button className='w-[87px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Collectible</button>
                    <button className='w-[59px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Blank</button>
                    <button className='w-[68px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>First Run</button>
                    <button className='w-[51px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Glow</button>
                </>}
            </div>
            <div className='flex justify-center'>
                <div className='w-full max-w-[330px] flex justify-start'>
                    <p onClick={() => setMoreFilters((prev) => !prev)} className='text-[0.75em] text-[#595959] mt-[10px] cursor-pointer'>{moreFilters ? 'Close more filters' : 'Show more filters'}</p>
                </div>
            </div>
            <div className='flex flex-col xsm:w-full sm:w-full w-[90%] m-auto overflow-hidden mb-[50px]'>
                {listings.map((value, index) => {
                    return (
                        <>
                            <SingleList value={value} index={index} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Listing