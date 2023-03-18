import React from 'react'
import SingleSellItem from './SingleSellItem'


const Selling = () => {

    const wonBids = [
        {
            id: '123',
            userId: "122121",
            seller: {
                id: 1, name: "Fred", rating: 3.5, whoPayShipping: 'seller', paymentCardNo: '', paymentBankName: ''
            },
            buyer: { id: 2, address: "Test street 54 764 45 Uppsala, Sweden" },
            discimage: null,
            discName: 'Annax',
            brand: 'Discart',
            condition: 8,
            bidWonPrice: 125,
            endTime: '02:20PM 23 OKt',
            purchaseConfirmed: true,
            addressSent: false,
            address: 'Test street 54 764 45 Uppsala, Sweden',
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

    ]

    return (
        <div className='px-[1.25em] py-[0.625em] sm:text-[20px]'>
            <div>
                {wonBids.map((value, index) => {
                    return (
                        <div>
                            <SingleSellItem value={value} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Selling