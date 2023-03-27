import React, { useEffect, useRef, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import SingleListCard from '../listings/SingleListCard';
import disc from './../../assets/disc.svg';

const PublicListing = () => {
    const [isHovered, setIsHovered] = useState(false);
    const scrollableDivRef = useRef(null);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const activeDiscs = [
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

    ]

    function handleScrollRight() {
        let value = 220;
        if (screenSize.width > 1279) {
            value = 220
        }
        if (screenSize.width < 1279) {
            value = 210
        }
        if (screenSize.width < 1023) {
            value = 200
        }
        if (screenSize.width < 767) {
            value = 160
        }
        scrollableDivRef.current.scrollBy({
            left: value,
            behavior: 'smooth',
        });
    }

    function handleScrollLeft() {
        let value = 220;
        if (screenSize.width > 1279) {
            value = 220
        }
        if (screenSize.width < 1279) {
            value = 210
        }
        if (screenSize.width < 1023) {
            value = 200
        }
        if (screenSize.width < 767) {
            value = 160
        }
        scrollableDivRef.current.scrollBy({
            left: -value,
            behavior: 'smooth',
        });
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex items-center flex-col mt-[20px] gap-[30px]'>
            <div className={`relative xsm:w-screen sm:w-screen w-[100%] ${screenSize.width > 768 ? "px-[25px] " : "pl-[18px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h1 className='font-[700] pl-[4px] text-[1.25em] mb-[15px]'>Active Listings</h1>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollLeft}><BsFillCaretLeftFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                <div ref={scrollableDivRef} className={`flex pr-[4px] pl-[4px] ${screenSize.width > 768 ? "overflow-hidden" : "overflow-auto"} pb-[5px] gap-[10px] mt-[11px] `}>
                    {activeDiscs.map((val, index) => {
                        return (
                            <SingleListCard key={index} val={val} index={index} />
                        )
                    })}
                </div>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollRight}><BsFillCaretRightFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
            </div>
            <div className={`relative xsm:w-screen sm:w-screen w-[100%] ${screenSize.width > 768 ? "px-[25px]" : "pl-[18px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='flex'>
                    <h1 className='font-[700] pl-[4px] text-[1.25em] mb-[5px]'>Finished Listings</h1>
                </div>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollLeft}><BsFillCaretLeftFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                <div ref={scrollableDivRef} className={`flex pr-[4px] pl-[4px] ${screenSize.width > 768 ? "overflow-hidden" : "overflow-auto"} pb-[5px] gap-[10px] mt-[11px] `}>
                    {activeDiscs.map((value, index) => {
                        return (
                            <div className={`flex relative mb-[10px] pb-[8px] card rounded-[8px] bg-[#ffffff] flex-wrap xsm:min-w-[150px] sm:min-w-[150px] md:min-w-[190px] lg:min-w-[200px] xl:min-w-[210px] 2xl:min-w-[210px] h-[0%] flex-col`}>

                                <img src={disc} className=' w-full' alt="" />
                                <div className='flex justify-between px-[0.625em] py-[0.425em]'>
                                    <div className='flex flex-col justify-between'>

                                        <div className='flex items-start'>
                                            <div className='flex flex-col mr-[0.425em]'>
                                                <h1 className='text-[0.75em] font-[700]' >{value.discName}</h1>
                                                <h1 className='text-[0.5em] font-[500] mt-[-0.413em] text-[##595959]' >{value.brand}</h1>
                                            </div>
                                            <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                                        </div>
                                        <div className='flex mt-[5px] flex-col text-[0.5em] text-[#595959]'>
                                            <span className='font-[600]'>{value.endTime}</span>
                                            <span className='font-[500] text-[#595959BF]'>23h 23 min</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-between'>
                                        <button className='text-[0.5em] px-[0.4375em] py-[0.125em] border-[#595959] border-[1px] rounded-[6px]'>Follow</button>

                                        <div className='flex flex-col'>
                                            <span className='text-[0.75em] font-[600]'>{value.startingPrice} kr</span>
                                            <span className='text-[0.5em] font-[500] text-[#595959bf]'>15 bids</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollRight}><BsFillCaretRightFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
            </div>
        </div>
    )
}

export default PublicListing