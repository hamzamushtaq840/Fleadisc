import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import chatbackarrow from './../../assets/chatbackarrow.svg'
import user from './../../assets/user.svg'
import send from './../../assets/send.svg'
import imagesend from './../../assets/imagesend.svg'

const SingleChat = () => {

    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location.state.name);
    let userId = '1'

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
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [chat]);
    return (
        <>
            <div className='flex items-center bg-[#cccccc21] h-[50px] '>
                <img src={chatbackarrow} className="w-[10px] h-[10.7px] cursor-pointer ml-[10px] mr-[30px]" onClick={() => navigate('/messages')} alt="back button" />
                <img src={user} className="h-[24px]  " alt="user" />
                <h1 className='text-[12px] text-[#595959] font-[700] ml-[12px]'>Fred</h1>
            </div>
            <div className=' flex flex-col' style={{ height: "calc(100vh - 121px)", scrollBehavior: "smooth" }}>
                <div className='flex flex-col flex-1 pt-[20px] gap-[15px] overflow-y-auto ' ref={containerRef}>
                    {chat.map((value, index) => {
                        return userId === value.senderId ? (
                            <div className='flex  px-[13px]  justify-center ml-auto items-center ' key={index}>
                                <div className='flex justify-center items-center py-[14px] px-[11px] rounded-[8px] border-[0.1px] bg-[#ffffff] border-[#ccc]'>
                                    <p className='w-[80%] text-[12px] font-[600]' >{value.text}</p>
                                </div>
                                <img src={user} className="ml-[8px] h-[30px]" alt="user" />
                            </div>
                        ) : (
                            <div className='flex  px-[13px]  justify-center mr-auto items-center ' key={index}>
                                <img src={user} className="mr-[8px] h-[30px]" alt="user" />
                                <div className='flex justify-center items-center py-[14px] px-[11px] rounded-[8px] bg-primary'>
                                    <p className='w-[100%] text-[12px] font-[600] text-[#ffffff] ' >{value.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className=' flex justify-between items-center px-[30px] h-[50px]'>
                    <img src={imagesend} alt="send an image" />
                    <input type="text" className='border-[0.5px] px-[5px]  text-[12px] font-[500] flex-1 mx-4 h-[39px] resize-none rounded-[8px]' />
                    <img src={send} alt="send message" />
                </div>
            </div>
        </>

    )
}

export default SingleChat