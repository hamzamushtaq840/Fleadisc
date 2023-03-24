import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import user from './../../assets/user.svg'
import swish from './../../assets/swish.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const PrivateProfile = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/profile/private/information')
    }, [])

    return (
        <div style={{ minHeight: "calc(100vh - 67px)", scrollBehavior: "smooth" }} className='mx-[2.575em] flex flex-col  sm:mx-[1rem] xsm:mx-[1rem] xsm:pt-[20px] sm:pt-[20px] pt-[40px] text-[1.3rem] sm:text-[1rem] xsm:text-[1rem] '>
            <img src={user} className="xsm:h-[8em] sm:h-[8em] md:h-[8em] lg:h-[8em] xl:h-[8em] 2xl:h-[8em] " alt="user" />
            <label htmlFor='fileInput' className='text-center hover:underline text-[.65em] mt-[3px] cursor-pointer'>
                Change picture
                <input
                    id='fileInput'
                    type='file'
                    style={{ display: 'none' }}

                />
            </label>
            <div className='flex justify-center'><button className='text-[#ffffff] mt-[0.45em] mb-[0.625em] button rounded-[2px] text-[.75em] font-[600] py-[0.625em] px-[2.1875em] bg-primary '>Edit</button></div>
            <div className='flex justify-center items-center mt-[10px] gap-[27px]'>
                <NavLink to="/profile/private/information" className="nav-link3 flex flex-col gap-[3px] min-w-[50px] items-center text-[#00000080]" activeclassname="active" >
                    <li className='text-[0.75em]'>Information</li>
                </NavLink>
                <span>|</span>
                <NavLink to="/profile/private/listings" className="nav-link3 ! flex flex-col gap-[3px] min-w-[50px] items-center text-[#00000080] " activeclassname="active" >
                    <li className='text-[0.75em]'>Listings</li>
                </NavLink>
                <span>|</span>
                <NavLink to="/profile/private/purchases" className="nav-link3 ! flex flex-col gap-[3px] min-w-[50px] items-center text-[#00000080] " activeclassname="active" >
                    <li className='text-[0.75em]'>Purchases</li>
                </NavLink>
            </div>
            {children}
        </div>
    )
}

export default PrivateProfile