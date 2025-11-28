import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
title: String,
description: String,
price: Number,
stock: Number
});

export default mongoose.model("Product", ProductSchema);
