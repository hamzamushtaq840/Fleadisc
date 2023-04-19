import mongoose from "mongoose";
const buyerSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
const sellerSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const discSchema = mongoose.Schema({
    discId: { type: mongoose.Schema.Types.ObjectId, ref: "Disc", required: true },
});

const tempSchema = mongoose.Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    disc: {
        type: [discSchema],
    },
    purchaseConfirmed: { type: Boolean, default: false },
    address: { type: String, default: null },
    addressSent: { type: Boolean, default: false },
    address: { type: String, default: null },
    shippingCost: { type: Number, default: null },
    paymentAddressConfirmed: { type: Boolean, default: false },
    paymentMethod: { type: Array, default: [] },
    paymentSent: { type: Boolean, default: false },
    paymentConfirmed: { type: Boolean, default: false },
    parcelSent: { type: Boolean, default: false },
    parcelReceived: { type: Boolean, default: false },
    cancelPayment: { type: Boolean, default: false },
})

export const TempDisc = mongoose.model("Temp", tempSchema);