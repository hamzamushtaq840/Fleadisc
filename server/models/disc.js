import mongoose from "mongoose";

const bidSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bidPrice: { type: Number, required: true },
    createdAt: { type: String, required: true },
});
const buyerSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    buyPrice: { type: Number, required: true },
    createdAt: { type: String, required: true },
});

const discSchema = mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
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
    bids: {
        type: [bidSchema],
        required: function () {
            return this.priceType !== "fixedPrice";
        },
    },
    buyer: {
        type: buyerSchema,
        required: function () {
            return this.priceType === "fixedPrice";
        },
    },
    isActive: { type: Boolean, default: true, required: false },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Bid', required: false },
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


export const Disc = mongoose.model("Disc", discSchema);
