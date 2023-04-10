import mongoose from "mongoose";

const boughtDiscSchema = mongoose.Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    disc: {
        pictureURL: { type: String, required: true },
        quantity: { type: Number, required: true },
        discName: { type: String, required: true },
        brand: { type: String, required: true },
        range: { type: String, required: true },
        condition: { type: Number, required: true },
        plastic: { type: String, required: false },
        grams: { type: String, required: false },
        named: { type: Boolean, required: true },
        dyed: { type: Boolean, required: true },
        blank: { type: Boolean, required: true },
        glow: { type: Boolean, required: true },
        collectible: { type: Boolean, required: true },
        firstRun: { type: Boolean, required: true },
        priceType: { type: String, required: true },
        startingPrice: { type: String, required: true },
        minPrice: { type: String, required: false },
        endDay: { type: String, required: true },
        endTime: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, required: true },
        seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        bids: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Bid',
            required: function () {
                return this.priceType === "auction";
            },
        },
    },
    purchaseConfirmed: { type: Boolean, default: false },
    addressSent: { type: Boolean, default: false },
    address: { type: String, default: null },
    shippingCost: { type: Number, default: null },
    paymentAddressConfirmed: { type: Boolean, default: false },
    paymentSent: { type: Boolean, default: false },
    paymentConfirmed: { type: Boolean, default: false },
    parcelSent: { type: Boolean, default: false },
    parcelReceived: { type: Boolean, default: false },
    cancelPayment: { type: Boolean, default: false },
});

export const BoughtDisc = mongoose.model("BoughtDisc", boughtDiscSchema);
