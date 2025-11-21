import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
    title:       { type: String, required: true },
    description: { type: String },
    price:       { type: Number, required: true },
    category:    { type: String },
    stock:       { type: Number, required: true },
    code:        { type: String, unique: true, required: true },
    status:      { type: Boolean, default: true },
    thumbnails:  { type: Array, default: [] }
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);

