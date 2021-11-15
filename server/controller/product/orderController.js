import { Order } from "../../models";

const orderController = {
  async addOrder(req, res) {
    const newOrder = new Order(req.body);
    try {
      const saveOrder = await newOrder.save();

      res.status(200).json(saveOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateOrder(req, res) {
    try {
      const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteOrder(req, res) {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("product hassbeen deleted !");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserOrder(req, res) {
    try {
      const order = await Order.findOne({ userId: req.params.userId });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getAllOrders(req, res) {
    try {
      const allorder = await Order.find();
      res.status(200).json(allorder);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

export default orderController;
