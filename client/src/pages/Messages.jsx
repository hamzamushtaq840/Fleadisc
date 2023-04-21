import React, { useEffect } from 'react'
import message from './../assets/message.svg'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../hooks/useAuth'
import axios from '../api/axios'
import Chats from '../components/messages/Chats'
import Loader from '../components/Loader'

const Messages = () => {
    const { auth, socket } = useAuth()

    const chats = useQuery(['allChats', auth.userId], () => axios.get(`/chat/${auth.userId}`), {
        onSuccess: (res) => {
            console.log(res.data);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    useEffect(() => {
        if (socket) {
            socket.on('refetchChat', () => {
                console.log('in message refresh');
                chats.refetch()
            })
        }
    }, [])

    if (chats.isLoading && !chats.data) {
        return (
            <Loader />
        )
    }
    return (
        <div className='flex justify-center'>
            <div className='px-[1.25em] xsm:w-full sm:w-full w-[98%] sm:text-[1rem] xsm:text-[1rem] text-[1.2rem] min-h-[90vh]'>
                <h1 className='mt-[0.438em] text-[1.25em] font-[700] mb-[0.875em]'>Messages</h1>
                <div className='flex flex-col gap-[18px]'>
                    {chats?.data?.data.length === 0 ? (
                        <div className='flex min-h-[50vh] justify-center items-center flex-col gap-[0.625rem]'>
                            <img src={message} className='h-[1.8em] opacity-[0.5] ' alt="" />
                            <p className='flex  text-[.9em] font-[400] justify-center items-center'>You don't have any conversations</p>
                        </div>
                    ) : (
                        chats?.data?.data.map((value, index) => (
                            <Chats key={index} value={value} index={index} chats={chats} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Messages