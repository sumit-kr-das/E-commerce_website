import express from "express";
const router = express.Router();
import { registerController, loginController, userController } from '../controller';
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken";

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.put("/:id", verifyTokenAndAuthorization, userController.user); // authenticate user & chenge his password
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, userController.getUser);
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);
router.get("/stats", verifyTokenAndAdmin, userController.stats);




export default router;