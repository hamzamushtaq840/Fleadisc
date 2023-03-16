import React from 'react'

const NumofListing = ({ setModel }) => {
    const listing = 2
    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer flex flex-col justify-center items-center'>
                <h1 className='text-[12px] font-[600]'>No of Listing : {listing}</h1>
                <div className='flex justify-center'><button className='w-[10em] h-[2.3125em] mt-[10px] text-[0.750em] font-[600] bg-primary text-[#ffff] shadow-2xl rounded-[2px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }}>Confirm Listing</button></div>
            </div>
        </>
    )
}

export default NumofListing