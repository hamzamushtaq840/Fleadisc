import { Rating } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import user from '../../assets/user.svg';
import SingleListCard from './SingleListCard';

const SingleList = ({ value, index }) => {
    const navigate = useNavigate();
    const scrollableDivRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    function handleScrollRight() {
        let value = 245;
        if (screenSize.width > 1279) {
            value = 245
        }
        if (screenSize.width < 1279) {
            value = 215
        }
        if (screenSize.width < 1023) {
            value = 205
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
        let value = 245;
        if (screenSize.width > 1279) {
            value = 245
        }
        if (screenSize.width < 1279) {
            value = 215
        }
        if (screenSize.width < 1023) {
            value = 205
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
        <>
            <div key={index} className='flex flex-col'>
                <div className='flex px-[19px] mb-[2px] gap-[0.563em] mt-[1.063em]'>
                    <img src={user} onClick={() => navigate('/profile/public')} className="cursor-pointer mt-1 xsm:h-[1.563em] sm:h-[1.563em] md:h-[1.9em] lg:h-[2em] xl:h-[2em] 2xl:h-[2em] " alt="user" />
                    <div className='flex flex-col justify-start'>
                        <h1 className='text-[0.75em] font-[500] cursor-pointer' onClick={() => navigate('/profile/public')} >{value.name}</h1>
                        <div className='ml-[-0.2em] flex items-center gap-[0.3125em]'>
                            <Rating size='small' name="half-rating-read" onChange={(e) => console.log(e.target.value)} defaultValue={value.rating} precision={0.5} readOnly />
                            <p className='text-[0.7em] font-[500]'>(23)</p>
                        </div>
                    </div>
                </div>

                <div className={`relative ${screenSize.width > 768 ? "px-[25px] " : "pl-[18px]"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 left-0 top-[50%] translate-y-[-50%]  flex justify-center items-center h-[80%] w-[20px] select-none ' onClick={handleScrollLeft}><BsFillCaretLeftFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                    <div ref={scrollableDivRef} className={`flex pr-[4px] pl-[4px] ${screenSize.width > 768 ? "overflow-hidden" : "overflow-auto"}  pb-[5px] gap-[10px] mt-[11px] `}>
                        {value.activelistings.map((val, index) => {
                            return (
                                <SingleListCard key={index} val={val} index={index} />
                            )
                        })}
                    </div>
                    {screenSize.width > 768 && <h1 className='absolute transition-opacity duration-300 right-[0px] top-[50%] translate-y-[-50%] flex justify-center items-center h-[80%] w-[20px] select-none ' onClick={handleScrollRight}><BsFillCaretRightFill className='cursor-pointer text-[#a9a8a8] hover:text-text' /></h1>}
                </div>
            </div>
        </>
    )
}

export default SingleList