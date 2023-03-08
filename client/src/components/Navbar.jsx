import React from 'react'
import listings from './../assets/listings.svg'
import create from './../assets/create.svg'
import delivery from './../assets/delivery.svg'
import messages from './../assets/messages.svg'
import signin from './../assets/signin.svg'

const Navbar = () => {
    return (
        <div className='h-[67px]  font-sans font-[400] text-[#1E1E21B2] flex items-center justify-between gap-[1.256em] px-[1.125em] text-[0.75rem] bg-[#C7E8CA]'>
            <div className='flex flex-col gap-[3px] '>
                <img src={listings} className="h-[22px]" alt='listings' />
                <h1 >Listings</h1>
            </div>
            <div className='flex flex-col  gap-[3px]'>
                <img src={create} className="h-[22px]" alt='create' />
                <h1 className='leading-[14.63px]'>Create</h1>
            </div>
            <div className='flex flex-col gap-[3px] '>
                <img src={delivery} className="h-[22px]" alt='delivery' />
                <h1>Delivery</h1>
            </div>
            <div className='flex flex-col gap-[3px] '>
                <img src={messages} className="h-[22px]" alt='messages' />
                <h1>Messages</h1>
            </div>
            <div className='flex flex-col  gap-[3px]'>
                <img src={signin} className="h-[22px]" alt='signin' />
                <h1>Sign In</h1>
            </div>
        </div>
    )
}

export default Navbar