import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { getCountryInfoByISO } from '../../utils/iso-country-currency';
import disc from './../../assets/disc.svg';
import { ColorRing } from 'react-loader-spinner';
import OlderBids from '../listings/OlderBids';
import FinishedListing from './FinishedListing';


const PrivateListings = () => {
    const navigate = useNavigate();
    const scrollableDivRef = useRef(null);
    const { auth } = useAuth();
    const userCurrency = "SEK";
    const [isHovered, setIsHovered] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [oldModal, setOldModal] = useState(false)
    const [discId, setDiscId] = useState("")
    const [latestDiscId, setLatestDiscId] = useState("");
    const oldModalComponent = useMemo(() => <OlderBids setModel={setOldModal} discId={latestDiscId} />, [setOldModal, latestDiscId]);

    useEffect(() => {
        setLatestDiscId(discId);
    }, [discId]);

    function getMonthAndDate(dateString) {
        const date = moment(dateString);

        const monthName = date.format("MMM");
        const dayOfMonth = date.format("D");
        return `${dayOfMonth} ${monthName}`;
    }

    function remainingTime(endDay, endTime) {
        const endDateTime = moment(`${endDay} ${endTime}`);
        const now = moment();
        const diff = endDateTime.diff(now);
        const duration = moment.duration(diff);
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        let remainingTime;
        if (years > 0) {
            remainingTime = `${years} ${years === 1 ? 'year' : 'years'}`;
        } else if (months > 0) {
            remainingTime = `${months} ${months === 1 ? 'month' : 'months'}`;
        } else if (days > 0) {
            remainingTime = `${days} ${days === 1 ? 'day' : 'days'} ${hours}h`;
        } else if (hours > 0) {
            remainingTime = `${hours}h ${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
        } else if (minutes > 0) {
            remainingTime = `${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
            if (seconds > 0) {
                remainingTime += ` ${seconds} s`;
            }
        } else {
            remainingTime = `${seconds} s`;
        }

        return remainingTime;
    }
    const activeDiscsQuery = useQuery(['discsBySellerId', auth.userId], () => axios.get(`/disc/getActiveDiscs/${auth.userId}`), {
        onSuccess: () => {
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const finishedDiscsQuery = useQuery(['finishedDiscsBySellerId', auth.userId], () => axios.get(`/disc/getFinishedDiscs/${auth.userId}`), {
        onSuccess: () => {
        },
        onError: (error) => {
            console.log(error);
        }
    });

    let activeCost = 0;
    let finishedCost = 0;

    finishedDiscsQuery?.data?.data?.forEach(disc => {
        if (disc.buyer === null) {
            finishedCost += parseInt(disc.startingPrice, 10); // Convert string to number with base 10 and then add
        } else {
            finishedCost += parseInt(disc?.buyer?.buyPrice, 10); // Convert string to number with base 10 and then add
        }
    });

    activeDiscsQuery?.data?.data?.forEach(disc => {
        activeCost += parseInt(disc.startingPrice, 10);
    });

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

    function getMonthAndDate(dateString) {
        const date = moment(dateString);
        const monthName = date.format("MMM");
        const dayOfMonth = date.format("D");
        return `${dayOfMonth} ${monthName}`;
    }
    if (activeDiscsQuery.isLoading || finishedDiscsQuery.isLoading && !activeDiscsQuery.data || !finishedDiscsQuery.data) {
        return (
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
        )
    }
    else
        return (
            <div className='flex xsm:overflow-x-hidden sm:overflow-x-hidden items-center mt-[25px] gap-[30px] flex-col'>
                {activeDiscsQuery?.data?.data?.length === 0 &&
                    <div className='flex w-full flex-col'>
                        <h1 className='font-[700] w-full px-[25px] text-[1.25em] mb-[15px]'>Active Listings</h1>
                        <div className='flex justify-center text-[.9em] min-h-[30vh] text-[#00000080] items-center w-full'>No Active Listings</div>
                    </div>
                }
                {activeDiscsQuery?.data?.data?.length > 0 &&
                    <div className={`relative xsm:w-screen sm:w-screen w-[100%] ${screenSize.width > 768 ? "px-[25px]" : "pl-[18px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className='flex gap-[0.8125em]'>
                            <h1 className='font-[700] pl-[10px] text-[1.25em] mb-[10px]'>Active Listings</h1>
                            {activeCost > 0 && <span className='text-[1.25em] font-[700] text-[#00000080]'>({activeCost} sek)</span>}
                        </div>
                        <>
                            {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollLeft}><BsFillCaretLeftFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                            <div ref={scrollableDivRef} className={`flex pr-[10px] pl-[10px] ${screenSize.width > 768 ? "overflow-hidden" : "overflow-auto"} pb-[5px] gap-[10px] mt-[11px]`}>
                                {activeDiscsQuery?.data?.data?.map((value, index) => {
                                    return (
                                        <div key={index} className={`flex relative mb-[10px]  xsm:text-[1.07rem] sm:text-[1.07rem] text-[1.2rem] pb-[8px] card rounded-[8px] bg-[#ffffff] flex-wrap xsm:min-w-[165px] xsm:max-w-[165px] sm:min-w-[165px] sm:max-w-[165px] md:min-w-[200px] md:max-w-[200px] lg:min-w-[210px] lg:max-w-[210px] xl:min-w-[220px] xl:max-w-[220px] 2xl:min-w-[240px] 2xl:max-w-[240px]  h-[0%] flex-col`}>
                                            <img src={value.pictureURL} className=' hover:opacity-[0.8] xsm:h-[165px] rounded-t-[8px] sm:h-[165px] md:h-[200px] lg:h-[210px] xsm:min-w-[165px] xsm:max-w-[165px] sm:min-w-[165px] sm:max-w-[165px] md:min-w-[200px] md:max-w-[200px] lg:min-w-[210px] lg:max-w-[210px] xl:min-w-[220px] xl:h-[220px] xl:max-w-[220px] 2xl:min-w-[240px] 2xl:max-w-[240px] 2xl:h-[240px] cursor-pointer' alt="Disc Image" />
                                            <div className='flex justify-between px-[0.625em] py-[0.425em]'>
                                                <div className='flex flex-col justify-between'>
                                                    <div className='flex flex-col items-start'>
                                                        <div className='flex  relative justify-start '>
                                                            <h1 className='text-[0.75em] font-[700]' >{value.discName}</h1>
                                                            <span className='px-[0.5em] mt-[2px] absolute right-[-25px] top-[-1px]  ml-[-5px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                                                        </div>
                                                        <h1 className='text-[0.55em] font-[500] min-h-[20.81px] inline leading-[11px] text-[##595959]'>{value.brand}</h1>
                                                    </div>
                                                    {value.priceType === 'auction' && <div className='flex mt-[5px] flex-col  text-[#595959]'>
                                                        <span className='font-[600] text-[0.6em]'>{getMonthAndDate(value.endDay)} - {value.endTime} </span>
                                                        <span className='font-[500] text-[#595959BF] text-[0.55em]'>{remainingTime(value.endDay, value.endTime)}</span>
                                                    </div>}
                                                </div>

                                                <div className='flex flex-col justify-end items-end'>
                                                    <div className='flex mt-[46px] flex-col items-end'>
                                                        {value?.priceType === 'fixedPrice' && <span className='text-[0.65em] mb-[-3px] text-end flex items-end  font-[600]'>{value.startingPrice} {userCurrency}</span>}
                                                        {(value?.priceType === 'auction' && value.bids.length > 0) && <span className='text-[0.65em] mb-[-3px] text-end flex items-end font-[600]'>{value.bids[value.bids.length - 1].bidPrice} {userCurrency}</span>}
                                                        {(value?.priceType === 'auction' && value.bids.length === 0) && <span className='text-[0.65em] mb-[-3px] text-end flex items-end font-[600]'>{value.startingPrice} {userCurrency}</span>}
                                                        {value.priceType === 'fixedPrice' && <span className='text-[0.6em] font-[500] text-[#595959bf]'>Fixed price</span>}
                                                        {(value.priceType !== 'fixedPrice') &&
                                                            <div className='flex items-center  text-[1em]'>
                                                                <p onClick={(e) => {
                                                                    setDiscId(value._id)
                                                                    if (value.bids.length === 0)
                                                                        return
                                                                    setOldModal(true); e.stopPropagation();
                                                                }} className='text-[0.6em] cursor-pointer hover:underline hover:text-text font-[500] text-[#595959BF] '>{value.bids.length} Bids</p>
                                                            </div>}
                                                    </div>
                                                </div>

                                            </div>
                                            {<div className='px-[10px]'>
                                                <button onClick={() => navigate('/create/edit', { state: value })} className='w-full py-[.3em] rounded-[4px] text-[#ffffff] bg-primary mb-[0.6em] text-[0.75em]'>Edit</button>
                                            </div>}
                                        </div>
                                    )
                                })}
                            </div>
                            {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollRight}><BsFillCaretRightFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                        </>
                    </div>}

                {finishedDiscsQuery?.data?.data?.length === 0 &&
                    <div className='flex w-full flex-col'>
                        <h1 className='font-[700] w-full px-[25px] text-[1.25em] mb-[15px]'>Finished Listings</h1>
                        <div className='flex justify-center text-[.9em] min-h-[30vh] text-[#00000080] items-center w-full'>No Finished Listings</div>
                    </div>
                }
                {finishedDiscsQuery?.data?.data?.length > 0 &&
                    <div className={`relative xsm:w-screen sm:w-screen w-[100%] ${screenSize.width > 768 ? "px-[25px]" : "pl-[18px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className='flex gap-[0.8125em]'>
                            <h1 className='font-[700] pl-[10px] text-[1.25em] mb-[10px]'>Finished Listings</h1>
                            {finishedCost > 0 && <span className='text-[1.25em] font-[700] text-[#00000080]'>({finishedCost} sek)</span>}
                        </div>
                        <div>
                            {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollLeft}><BsFillCaretLeftFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                            <div ref={scrollableDivRef} className={`flex pr-[10px] pl-[10px] ${screenSize.width > 768 ? "overflow-hidden" : "overflow-auto"} pb-[5px] gap-[10px] mt-[11px]`}>
                                {finishedDiscsQuery?.data?.data?.map((value, index) => {
                                    return (
                                        <FinishedListing key={index} value={value} userCurrency={userCurrency} />
                                    )
                                })}
                            </div>
                            {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none' onClick={handleScrollRight}><BsFillCaretRightFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                        </div>
                    </div>}
                {oldModal && oldModalComponent}

            </div >
        )
}

export default PrivateListings