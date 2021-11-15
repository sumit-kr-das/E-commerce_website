import { Product } from "../../models";

const productController = {
  async addProduct(req, res) {
    const newProduct = new Product(req.body);
    try {
      const saavedProduct = await newProduct.save();

      res.status(200).json(saavedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateProduct(req, res) {
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteProduct(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("product hassbeen deleted !");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getProduct(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getAllProducts(req, res) {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
      let products;
      if (queryNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
      } else if (queryCategory) {
        products = await Product.find({
          categories: {
            $in: [queryCategory],
          },
        })
          .sort({ createdAt: -1 })
          .limit(5);
      } else {
        products = await Product.find();
      }
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

export default productController;
