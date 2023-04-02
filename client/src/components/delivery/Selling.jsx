import React from 'react'
import SingleSellItem from './SingleSellItem'

const Selling = () => {
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

    return (
        <div className=' bg-[#FAFAFA] flex justify-center px-[1.25em] py-[0.625em] text-[1.2rem] xsm:text-[1rem] sm:text-[1.125rem] '>
            <div className='w-[80vw] sm:w-[100vw] xsm:w-[100vw]'>
                {wonBids.map((value, index) => {
                    return (
                        <div key={index}>
                            <SingleSellItem value={value} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Selling