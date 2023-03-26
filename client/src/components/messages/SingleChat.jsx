import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import chatbackarrow from './../../assets/chatbackarrow.svg'
import imagesend from './../../assets/imagesend.svg'
import send from './../../assets/send.svg'
import user from './../../assets/user.svg'

const SingleChat = () => {
    // console.log(location.state.name);
    let userId = '1'
    const navigate = useNavigate()
    const containerRef = useRef(null);
    const chat = [
        {
            "_id": "61f165a64e8a1b9e421f378a",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:23:00Z",
            "text": "I was wondering where to send the parcel. The address you gave is wrong."
        },
        {
            "_id": "61f165a64e8a1b9e421f378b",
            "senderId": "1",
            "recipientId": "2",
            "timestamp": "2022-03-15T14:25:00Z",
            "text": "Yeah yeah, whatever. Here is the right address."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },
        {
            "_id": "61f165a64e8a1b9e421f378b",
            "senderId": "1",
            "recipientId": "2",
            "timestamp": "2022-03-15T14:25:00Z",
            "text": "Yeah yeah, whatever. Here is the right address."
        },
        {
            "_id": "61f165a64e8a1b9e421f378a",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:23:00Z",
            "text": "I was wondering where to send the parcel. The address you gave is wrong."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },
        {
            "_id": "61f165a64e8a1b9e421f378c",
            "senderId": "2",
            "recipientId": "1",
            "timestamp": "2022-03-15T14:27:00Z",
            "text": "I’ve sent the parcel."
        },

    ]

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [chat]);

    return (
        <>
            <div className='flex text-[1.3rem] sm:text-[1rem] xsm:text-[1rem] items-center bg-[#cccccc21] h-[2.5em] '>
                <img src={chatbackarrow} className="w-[0.625em] h-[0.9375em] cursor-pointer ml-[0.625em] mr-[0.9375em]" onClick={() => navigate('/messages')} alt="back button" />
                <img src={user} onClick={() => navigate('/profile/public')} className="h-[1.5em] cursor-pointer" alt="user" />
                <h1 onClick={() => navigate('/profile/public')} className='text-[0.75em] cursor-pointer text-[#595959] font-[700] ml-[0.75em]'>Fred</h1>
            </div>
            <div className=' flex flex-col ' style={{ height: "calc(100vh - 121px)", scrollBehavior: "smooth" }}>
                <div className='flex flex-col flex-1 pt-[1.25em] px-[.6em] xsm:px-[0] sm:px-[0] gap-[0.9375em] overflow-y-auto' ref={containerRef}>
                    {chat.map((value, index) => {
                        return userId === value.senderId ? (
                            <div className='flex px-[0.8125em] justify-center ml-auto items-center' key={index}>
                                <div className='flex justify-center items-center py-[0.875em] px-[0.6875em] rounded-[8px] border-[0.1px] bg-[#ffffff] border-[#ccc]'>
                                    <p className='w-[100%] xsm:text-[0.75em] sm:text-[0.75em] text-[0.85em] font-[600]' >{value.text}</p>
                                </div>
                                <img src={user} onClick={() => navigate('/profile/private')} className="ml-[0.5em] cursor-pointer h-[1.875em]" alt="user" />
                            </div>
                        ) : (
                            <div className='flex px-[0.8125em] justify-center mr-auto items-center' key={index}>
                                <img src={user} onClick={() => navigate('/profile/public')} className="mr-[0.5em] h-[1.875em] cursor-pointer" alt="user" />
                                <div className='flex justify-center items-center py-[0.875em] px-[0.6875em] rounded-[8px] bg-primary'>
                                    <p className='w-[100%] xsm:text-[0.75em] sm:text-[0.75em] text-[0.85em] font-[600] text-[#ffffff]'>{value.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='border-t-[0.5px] border-t-[#ccc] flex justify-between items-center px-[1.875em] xsm:h-[3.75em] sm:h-[3.75em] h-[4.75em]'>
                    <img src={imagesend} className="cursor-pointer" alt="send an image" />
                    <input type="text" className='border-[0.5px] px-[0.3125em] text-[0.75em] font-[500] flex-1 mx-4 h-[39px] resize-none rounded-[8px]' />
                    <img src={send} className="cursor-pointer" alt="send message" />
                </div>
            </div>
        </>

    )
}

export default SingleChat