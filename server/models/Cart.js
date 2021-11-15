import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productID: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("cart", CartSchema, "cart");
