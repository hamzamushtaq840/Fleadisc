import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import signin from './../assets/signin.svg';

const Navbar = () => {
    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setShowShadow(true);
        } else if (window.pageYOffset === 0) {
            setShowShadow(false);
        }
    };

    return (
        <>
            <div style={showShadow ? { boxShadow: "0px 2px 12px rgba(0,0,0,0.1)" } : {}} className='flex items-center fixed w-full h-[67px] justify-center bg-[#FAFAFA] z-50'>
                <div className='h-[67px] w-full text-[1.2rem] sm:text-[0.75rem] xsm:text-[0.75rem]  font-sans font-[400] xsm:max-w-[100vw] sm:max-w-[100vw] max-w-[70vw] m-auto flex items-center justify-around gap-[1.256em] px-[1.125em]'>
                    <NavLink to="/" className="nav-link flex flex-col gap-[3px] min-w-[50px] items-center text-[#00000]" activeclassname="active">
                        <svg width="19" height="19"><path d="M0.125 0.125V8.45833H8.45833V0.125H0.125ZM6.375 6.375H2.20833V2.20833H6.375V6.375ZM0.125 10.5417V18.875H8.45833V10.5417H0.125ZM6.375 16.7917H2.20833V12.625H6.375V16.7917ZM10.5417 0.125V8.45833H18.875V0.125H10.5417ZM16.7917 6.375H12.625V2.20833H16.7917V6.375ZM10.5417 10.5417V18.875H18.875V10.5417H10.5417ZM16.7917 16.7917H12.625V12.625H16.7917V16.7917Z" /></svg>
                        <h1 className='text-[.75em]'>Listings</h1>
                    </NavLink>
                    <NavLink to="/delivery" className="nav-link flex flex-col gap-[3px] min-w-[50px] items-center text-[#00000]" activeclassname="active">
                        <div className='mt-[-3px]'>
                            <svg width="25" height="25">
                                <path d="M8.7625 16.0714H0V19.6429H8.7625V25L13.75 17.8571L8.7625 10.7143V16.0714ZM16.2375 14.2857V8.92857H25V5.35714H16.2375V0L11.25 7.14286L16.2375 14.2857Z" fill-opacity="0.7" />
                            </svg>
                        </div>
                        <h1 className='text-[.75em] mt-[-3px]'>Delivery</h1>
                    </NavLink>
                    <NavLink to="/create" className="nav-link flex flex-col gap-[3px] mt-[1px] min-w-[50px] items-center text-[#00000]" activeclassname="active">
                        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7917 0.125H2.20833C1.05208 0.125 0.125 1.0625 0.125 2.20833V16.7917C0.125 17.9375 1.05208 18.875 2.20833 18.875H16.7917C17.9375 18.875 18.875 17.9375 18.875 16.7917V2.20833C18.875 1.0625 17.9375 0.125 16.7917 0.125ZM14.7083 10.5417H10.5417V14.7083H8.45833V10.5417H4.29167V8.45833H8.45833V4.29167H10.5417V8.45833H14.7083V10.5417Z" fill-opacity="0.7" />
                        </svg>
                        <h1 className='text-[.75em] leading-[14.63px]'>Create</h1>
                    </NavLink>
                    <NavLink to="/messages" className="nav-link flex flex-col gap-[3px] min-w-[60px] items-center text-[#00000]" activeclassname="active">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.2L2 15.2V2H18V14Z" fill-opacity="0.7" />
                        </svg>
                        <h1 className='text-[.75em] mt-[-2px]'>Messages</h1>
                    </NavLink>
                    <NavLink to="/signin" className="flex flex-col gap-[3px] min-w-[50px] items-center">
                        <img src={signin} className="h-[22px]" alt='delivery' />
                        <h1 className='text-[.75em] mt-[-2px]'>Sign In</h1>
                    </NavLink>
                </div>
            </div>

            <div className='pt-[67px]'>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar

