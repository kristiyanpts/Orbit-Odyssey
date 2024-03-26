const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [1, "Title should be at least 1 characters"],
    },
    description: {
      type: String,
      required: true,
      minlength: [1, "Description should be at least 1 characters"],
    },
    imageUrl: {
      type: String,
      required: true,
      minlength: [1, "Image URL should be at least 1 characters"],
    },
    price: {
      type: Number,
      required: true,
      min: [10000, "Price should be at least 10000"],
    },
    buyers: [{ type: ObjectId, ref: "User", required: true }],
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Product", productSchema);
