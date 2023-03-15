import React from 'react'
import listings from './../assets/listings.svg'
import create from './../assets/create.svg'
import delivery from './../assets/delivery.svg'
import messages from './../assets/messages.svg'
import signin from './../assets/signin.svg'
import { NavLink } from 'react-router-dom'

const Navbar = ({ children }) => {
    return (
        <>
            <div className='h-[67px]  font-sans font-[400]  flex items-center justify-between gap-[1.256em] px-[1.125em] text-[0.75rem] '>
                <NavLink to="/" className={({ isActive }) => (isActive ? "flex flex-col gap-[3px] min-w-[50px] items-center  text-[#00000] font-[600]" : "flex flex-col gap-[3px] min-w-[50px] items-center ")} >
                    <img src={listings} className="h-[22px]" alt='listings' />
                    <h1 >Listings</h1>
                </NavLink>
                <NavLink to="/delivery" className={({ isActive }) => (isActive ? "flex flex-col gap-[3px] font-[600]  min-w-[53px] items-center  text-[#00000]" : "flex flex-col gap-[3px] min-w-[53px] items-center")}>
                    <img src={delivery} className="h-[22px]" alt='delivery' />
                    <h1>Delivery</h1>
                </NavLink>
                <NavLink to="/create" className={({ isActive }) => (isActive ? "flex flex-col gap-[3px] font-[600]  min-w-[50px] items-center  text-[#00000]" : "flex flex-col gap-[3px] min-w-[50px] items-center")}>
                    <img src={create} className="h-[22px]" alt='create' />
                    <h1 className='leading-[14.63px]'>Create</h1>
                </NavLink>
                <NavLink to="/messages" className={({ isActive }) => (isActive ? "flex flex-col gap-[3px] font-[600]  min-w-[60px] items-center  text-[#00000]" : "flex flex-col gap-[3px] min-w-[60px] items-center")}>
                    <img src={messages} className="h-[22px]" alt='delivery' />
                    <h1>Messages</h1>
                </NavLink>
                <NavLink to="/signin" className="flex flex-col gap-[3px] min-w-[50px] items-center">
                    <img src={signin} className="h-[22px]" alt='delivery' />
                    <h1>Sign In</h1>
                </NavLink>
            </div>
            {children}
        </>
    )
}

export default Navbar