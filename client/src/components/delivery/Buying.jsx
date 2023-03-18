import React, { useState } from 'react'
import SingleBuyItem from './SingleBuyItem';

const Buying = () => {
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: false,
            addressSent: false,
            address: null,
            shippingCost: 'sda',
            paymentAddressConfimed: false,
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: false,
            address: null,
            shippingCost: 'sda',
            paymentAddressConfimed: false,
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: 'sda',
            paymentAddressConfimed: false,
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            paymentSent: false,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            paymentSent: true,
            paymentConfimed: false,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            paymentSent: true,
            paymentConfimed: true,
            parcelSent: false,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            paymentSent: true,
            paymentConfimed: true,
            parcelSent: true,
            parcelRecived: false,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
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
            bidWonPrice: '125Kr',
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: true,
            address: null,
            shippingCost: '24kr',
            paymentAddressConfimed: true,
            paymentSent: true,
            paymentConfimed: true,
            parcelSent: true,
            parcelRecived: true,
            givenBuyerRating: null,
            givenSellerRating: null,
            cancelPayment: false,
        },
    ]

    return (
        <div className='px-[1.25em] py-[0.625em] sm:text-[20px]'>
            <div>
                {wonBids.map((value, index) => {
                    return (
                        <div>
                            <SingleBuyItem value={value} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Buying