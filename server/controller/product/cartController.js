import { Cart } from "../../models";

const cartController = {
  async addProduct(req, res) {
    const newCart = new Cart(req.body);
    try {
      const saveCart = await newCart.save();

      res.status(200).json(saveCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateProduct(req, res) {
    try {
      const updateCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteProduct(req, res) {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("product hassbeen deleted !");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserCart(req, res) {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getAllCart(req, res) {
    try {
      const allCart = await Cart.find();
      res.status(200).json(allCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

export default cartController;
