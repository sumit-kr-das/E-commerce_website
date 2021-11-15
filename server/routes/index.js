import express from "express";
const router = express.Router();
import { registerController, loginController, userController, productController, cartController, orderController } from '../controller';
import { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } from "../middleware/verifyToken";

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.put("/:id", verifyTokenAndAuthorization, userController.user); // authenticate user & chenge his password
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, userController.getUser);
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);
router.get("/stats", verifyTokenAndAdmin, userController.stats);

router.post("/product", verifyTokenAndAdmin, productController.addProduct);
router.put("/product/:id", verifyTokenAndAdmin, productController.updateProduct);
router.delete("/product/:id", verifyTokenAndAdmin, productController.deleteProduct);
router.get("/product/find/:id", productController.getProduct);
router.get("/product", productController.getAllProducts);

router.post("/cart", verifyToken, cartController.addProduct);
router.post("/cart/:id", verifyTokenAndAuthorization, cartController.updateProduct);
router.post("/cart/:userId", verifyTokenAndAuthorization, cartController.getUserCart);
router.get("/cart", verifyTokenAndAdmin, cartController.getAllCart);

router.post("/order", verifyToken, orderController.addOrder);
router.post("/cart/:id", verifyTokenAndAdmin, orderController.updateOrder);
router.post("/cart/:userId", verifyTokenAndAdmin, orderController.getUserOrder);
router.get("/cart", verifyTokenAndAuthorization, orderController.getAllOrders);


export default router;