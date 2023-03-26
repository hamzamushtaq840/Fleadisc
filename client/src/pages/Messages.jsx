import React from 'react'
import { useNavigate } from 'react-router-dom'
import user from './../assets/user.svg'

const Messages = () => {
    const navigate = useNavigate()
    let chats = [
        {
            chatId: '12912981212',
            recieverName: 'Fred',
            recieverImage: user,
            lastText: "I have a question about",
            lastTextTime: '12-03-2023T22:04',
            read: true
        },
        {
            chatId: '129as12981212',
            recieverName: 'Fred',
            recieverImage: user,
            lastTextTime: '12-03-2023T22:04',
            lastText: "Okay great, I just got the parcel",
            read: false
        },
        {
            chatId: '1291298a1212',
            recieverName: 'Fred',
            recieverImage: user,
            lastTextTime: '12-03-2023T22:04',
            lastText: "Okay great, I just got the parcel",
            read: false
        },
        {
            chatId: '1291298121s2',
            recieverName: 'Fred',
            recieverImage: user,
            lastTextTime: '12-03-2023T22:04',
            lastText: "Okay great, I just got the parcel",
            read: false
        }
    ]

    const handleSingleChat = (id) => {
        navigate("/messages/chat", { state: { chatId: id } })
    }

    return (
        <div className='flex justify-center'>
            <div className='px-[1.25em] xsm:w-full sm:w-full w-[98%] sm:text-[1rem] xsm:text-[1rem] text-[1.2rem] min-h-[90vh]'>
                <h1 className='mt-[0.438em] text-[1.25em] font-[700] mb-[0.875em]'>Messages</h1>
                <div className='flex flex-col gap-[18px]'>
                    {chats.map((value, index) => {
                        return (
                            <div className='flex cursor-pointer' onClick={() => handleSingleChat(value.chatId)}>
                                <div className='h-[3.125em] w-[3.125em] mr-[0.9375em]'>
                                    <img src={user} alt="userImage" />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <h1 className='text-[.7em] text-[#595959] font-[700] mb-[0.125em]'>{value.recieverName}</h1>
                                    <p className={`text-[.7em] text-[#000000] mb-[0.625em] ${value.read ? "font-[700]" : "font-[400]"} `}>{value.lastText}</p>
                                    <p className='text-[.5em] font-[500] text-[#595959bf] mb-[0.3125em]'>{value.lastTextTime}</p>
                                    {index + 1 !== chats.length && <div className='py-[0.019em] bg-[#5959593b]'></div>}
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Messages