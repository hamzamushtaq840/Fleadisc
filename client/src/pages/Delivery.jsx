import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Delivery = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/delivery/buying')
    }, [])

    return (
        <div className='flex flex-col' style={{ height: "calc(100vh - 67px)", scrollBehavior: "smooth" }}>
            <div className='flex items-center gap-[15px] justify-center'>
                <NavLink to="/delivery/buying" className="px-[1.5rem] py-[0.5rem] nav-link2 flex flex-col gap-[3px] min-w-[50px] items-center  text-[#00000] " activeclassname="active" >
                    <h2 className='text-[#0000005f] w-[4rem] text-center text-[14px] font-[500]'>Buying</h2>
                </NavLink>
                |
                <NavLink to="/delivery/selling" className="nav-link2 flex flex-col px-[1.5rem] py-[0.5rem] gap-[3px] min-w-[50px] items-center  text-[#00000] " activeclassname="active" >
                    <h2 className='text-[#0000005f] w-[4rem] text-center  text-[14px] font-[500]'>Selling</h2>
                </NavLink>
            </div>
            {children}
        </div>
    )
}

export default Delivery