import React, { useEffect, useState } from 'react';
import SingleBuyItem from './SingleBuyItem';
import useAuth from './../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from '../../api/axios';
import { ColorRing } from 'react-loader-spinner';
import { io } from 'socket.io-client'
import { toast } from 'react-toastify'

const Loader =
    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} className=''>
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#494949', '#494949', '#494949', '#494949', '#494949']}
        />
    </div>

const Buying = () => {
    const { auth, socket } = useAuth()
    const wonBids = [
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: 'buyer', paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: false,
            addressSent: false,
            address: null,
            shippingCost: 'sda',
            paymentAddressConfimed: false,
            accountNo: null,
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: 'buyer', paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: true,
            addressSent: false,
            address: null,
            shippingCost: 'sda',
            paymentAddressConfimed: false,
            accountNo: null,
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: 'buyer', paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: 'sda',
            paymentAddressConfimed: false,
            accountNo: null,
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },

        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            accountNo: '0707124556',
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            accountNo: '0707124556',
            paymentSent: true,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            accountNo: '0707124556',
            paymentSent: true,
            paymentConfimed: true,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            accountNo: '0707124556',
            paymentSent: true,
            paymentConfimed: true,
            parcelSent: true,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '23:00 - 28 Oct',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            accountNo: '0707124556',
            paymentSent: true,
            paymentConfimed: true,
            parcelSent: true,
            parcelRecived: true,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
            bids: []
        },
    ]

    const buyingQuery = useQuery(['buyingDiscs', auth.userId], () => axios.get(`/disc/buying/${auth.userId}`), {
        onSuccess: (res) => {
        },
        onError: (error) => {
            console.log(error);
        }
    });


    useEffect(() => {
        buyingQuery.refetch()
        if (socket) {
            socket.on('refetchBuying', () => {
                // Handle incoming data from server
                buyingQuery.refetch()
                toast.success('You have a new notification', { position: toast.POSITION.TOP_RIGHT, });
                // Update state or perform other actions
            })
        }
    }, [])


    if (buyingQuery.isLoading || buyingQuery.isRefetching && !buyingQuery.data) {
        return (
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} className=''>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#494949', '#494949', '#494949', '#494949', '#494949']}
                />
            </div>

        )
    }
    else
        return (
            <div className=' bg-[#FAFAFA] flex justify-center px-[1.25em] py-[0.625em] text-[1.2rem] xsm:text-[1rem] sm:text-[1rem] '>
                <div className='w-[80vw] sm:w-[100vw] xsm:w-[100vw]'>
                    {buyingQuery?.data?.data?.length === 0 ? (
                        <p className='flex text-center min-h-[40vh] items-center justify-center text-[1em]'>No disc Found</p>
                    ) : (
                        buyingQuery?.data?.data?.map((value, index) => {
                            return (
                                <div key={index}>
                                    <SingleBuyItem value={value} />
                                </div>
                            )
                        })
                    )}
                </div>
            </div >
        )
}

export default Buying