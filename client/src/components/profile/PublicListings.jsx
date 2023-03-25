import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingleListCard from '../listings/SingleListCard'
import disc from './../../assets/disc.svg'
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";

const PublicListing = () => {
    const navigate = useNavigate();

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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


    const scrollableDivRef = useRef(null);

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

        console.log(value);
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

        console.log(value);

        scrollableDivRef.current.scrollBy({
            left: -value,
            behavior: 'smooth',
        });
    }

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

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
        <div className='flex items-center flex-col gap-[30px]'>

            <div className={`relative  xsm:w-screen sm:w-screen w-[100%] ${screenSize.width > 768 ? "px-[25px] " : "pl-[18px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h1 className='font-[700] pl-[4px] text-[1.25em] mb-[15px] '>Active Listings</h1>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%]  flex justify-center items-center h-[80%] w-[20px] select-none  ' onClick={handleScrollLeft}><BsFillCaretLeftFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                <div ref={scrollableDivRef} className={`flex pr-[4px] pl-[4px] ${screenSize.width > 768 ? "overflow-hidden" : "overflow-auto"}  pb-[5px] gap-[10px] mt-[11px] `}>
                    {activeDiscs.map((val, index) => {
                        return (
                            <SingleListCard key={index} val={val} index={index} />
                        )
                    })}
                </div>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none  ' onClick={handleScrollRight}><BsFillCaretRightFill className='cursor-pointer  text-[#a9a8a8] hover:text-text' /></h1>}
            </div>
            <div className={`relative  xsm:w-screen sm:w-screen  w-[100%] ${screenSize.width > 768 ? "px-[25px] " : "pl-[18px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h1 className='font-[700] pl-[4px] text-[1.25em] mb-[15px] '>Finished Listings</h1>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%]  flex justify-center items-center h-[80%] w-[20px] select-none  ' onClick={handleScrollLeft}><BsFillCaretLeftFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                <div ref={scrollableDivRef} className={`flex pr-[4px] pl-[4px] ${screenSize.width > 768 ? "overflow-hidden" : "overflow-auto"}  pb-[5px] gap-[10px] mt-[11px] `}>
                    {activeDiscs.map((val, index) => {
                        return (
                            <SingleListCard key={index} val={val} index={index} />
                        )
                    })}
                </div>
                {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none  ' onClick={handleScrollRight}><BsFillCaretRightFill className='cursor-pointer  text-[#a9a8a8] hover:text-text' /></h1>}
            </div>
        </div>
    )
}

export default PublicListing