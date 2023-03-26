import React from 'react'

const NumofListing = ({ setModel }) => {
    const listing = 2
    return (
        <>
            <div className='modalBackground' onClick={() => setModel(false)}></div>
            <div className='modalContainer xsm:text-[16px] sm:text-[16px] text-[20px] sm:h-[20%] sm:w-[70%] xsm:w-[70%] xsm:h-[20%] h-[30%] w-[40%] flex flex-col justify-center items-center'>
                <span className='text-[.75em] items-center flex font-[500]' >
                    No of Listing : &nbsp;
                    <h1 className='text-[.95em] mt-[1px] font-[800]'>{listing}</h1>
                </span>
                <div className='flex justify-center'><button className='w-[10em] h-[2.3125em] mt-[10px] text-[0.750em] font-[600] bg-primary text-[#ffff] shadow-2xl rounded-[2px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }}>Confirm Listing</button></div>
            </div>
        </>
    )
}

export default NumofListing