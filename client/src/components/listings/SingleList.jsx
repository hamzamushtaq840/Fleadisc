import React, { useEffect, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import user from '../../assets/user.svg'
import SingleListCard from './SingleListCard';
import { useNavigate } from 'react-router-dom';

const SingleList = ({ value, index }) => {
    const navigate = useNavigate();

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        console.log(e.button, new Date());
        if (e.button === 0) {
            setIsDragging(true);
            setStartX(e.pageX - e.currentTarget.offsetLeft);
            setScrollLeft(e.currentTarget.scrollLeft);
        }
    };

    const handleMouseUp = (e) => {
        console.log(e.button, new Date());
        if (e.button === 0) {
            setIsDragging(false);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - e.currentTarget.offsetLeft;
        const scrollX = x - startX;
        e.currentTarget.scrollLeft = scrollLeft - scrollX;
    };

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
        <>
            <div key={index} className='flex  flex-col'>
                <div className='flex px-[19px] mb-[2px] gap-[0.563em] mt-[1.063em]'>
                    <img src={user} onClick={() => navigate('/profile/public')} className="cursor-pointer mt-1 xsm:h-[1.563em] sm:h-[1.563em] md:h-[1.9em] lg:h-[2em] 2xl:h-[2em] " alt="user" />
                    <div className='flex flex-col justify-start'>
                        <h1 className='text-[0.75em] font-[500] cursor-pointer' onClick={() => navigate('/profile/public')} >{value.name}</h1>
                        <div className='ml-[-0.2em]'>
                            <Rating size='small' name="half-rating-read" onChange={(e) => console.log(e.target.value)} defaultValue={value.rating} precision={0.5} readOnly />
                        </div>
                    </div>
                </div>

                <div className='relative px-10' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <h1 style={!isHovered ? { opacity: "0" } : { opacity: "1" }} className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%] bg-[rgba(0,0,0,0.1)] h-[80%] w-10 select-none' onClick={handleScrollLeft}>L</h1>
                    <div ref={scrollableDivRef} className='flex px-2 overflow-hidden pb-[5px] gap-[10px] mt-[11px] select-none'>
                        {value.activelistings.map((val, index) => {
                            return (
                                <SingleListCard key={index} val={val} index={index} />
                            )
                        })}
                    </div>
                    <h1 style={!isHovered ? { opacity: "0" } : { opacity: "1" }} className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] bg-[rgba(0,0,0,0.1)] h-[80%] w-10 select-none' onClick={handleScrollRight}>R</h1>
                </div>
            </div>
        </>
    )
}

export default SingleList