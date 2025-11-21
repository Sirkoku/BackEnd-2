import mongoose from "mongoose";

const cartCollection = "carts";

const cartSchema = new mongoose.Schema({
products: [
    {
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
        quantity: { type: Number, default: 1 }
    }
]
});

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);

