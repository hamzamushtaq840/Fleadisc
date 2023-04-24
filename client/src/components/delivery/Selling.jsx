import React, { useEffect } from 'react'
import SingleSellItem from './SingleSellItem'
import { useQuery } from '@tanstack/react-query';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { ColorRing } from 'react-loader-spinner';
import { toast } from 'react-toastify'
import Show from './Show';


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

const Selling = () => {
    const { auth, socket } = useAuth()
    const wonBids = [
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: 'buyer', paymentCardNo: '0707124556', paymentBankName: ''
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
            shippingCost: null,
            paymentAddressConfimed: false,
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
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: 'buyer', paymentCardNo: '0707124556', paymentBankName: ''
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
            shippingCost: 24,
            paymentAddressConfimed: false,
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
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: 'buyer', paymentCardNo: '0707124556', paymentBankName: ''
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
            address: 'Test street 54 764 45 Uppsala, Sweden',
            shippingCost: 24,
            paymentAddressConfimed: false,
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
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '0707124556', paymentBankName: ''
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
            address: 'Test street 54 764 45 Uppsala, Sweden',
            shippingCost: 24,
            paymentAddressConfimed: true,
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
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '0707124556', paymentBankName: ''
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
            address: 'Test street 54 764 45 Uppsala, Sweden',
            shippingCost: 24,
            paymentAddressConfimed: true,
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
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '0707124556', paymentBankName: ''
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
            address: 'Test street 54 764 45 Uppsala, Sweden',
            shippingCost: 24,
            paymentAddressConfimed: true,
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
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '0707124556', paymentBankName: ''
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
            address: 'Test street 54 764 45 Uppsala, Sweden',
            shippingCost: 24,
            paymentAddressConfimed: true,
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
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: "buyer", paymentCardNo: '0707124556', paymentBankName: ''
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
            address: 'Test street 54 764 45 Uppsala, Sweden',
            shippingCost: 24,
            paymentAddressConfimed: true,
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

    const sellingQuery = useQuery(['sellingDiscs', auth.userId], () => axios.get(`/disc/selling/${auth.userId}`), {
        onSuccess: (res) => {
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const cancelQuery = useQuery(['sellingCancel', auth.userId], () => axios.get(`/delivery/getSellingCancel/${auth.userId}`), {
        onSuccess: (res) => {
        },
        onError: (error) => {
            console.log(error);
        }
    });

    useEffect(() => {
        sellingQuery.refetch()
        if (socket) {
            socket.on('refetchSelling', () => {
                sellingQuery.refetch()
                toast.success('You have a new notification', { position: toast.POSITION.TOP_RIGHT, });
            })
        }
    }, [])

    if (sellingQuery.isLoading || sellingQuery.isRefetching && !sellingQuery.data) {
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
            <div className=' bg-[#FAFAFA] flex justify-center px-[1.25em] py-[0.625em] text-[1.2rem] xsm:text-[1rem] sm:text-[1.125rem] '>
                <div className='w-[80vw] sm:w-[100vw] xsm:w-[100vw]'>
                    {sellingQuery?.data?.data?.length === 0 ? (
                        <p className='flex text-center min-h-[40vh] items-center justify-center text-[1em]'>No disc Found</p>
                    ) : (
                        sellingQuery?.data?.data?.map((value, index) => (
                            <div key={index}>
                                <SingleSellItem value={value} />
                            </div>
                        ))
                    )}
                </div>
                {cancelQuery?.data?.data?.length > 0 &&
                    cancelQuery?.data?.data?.map((val, index) => {
                        return (
                            <Show key={index} val={val} />
                        )
                    })
                }
            </div>
        )
}

export default Selling