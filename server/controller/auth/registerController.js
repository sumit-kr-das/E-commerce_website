import { User } from "../../models";
import CryptoJS from "crypto-js";
import { PASSWORD_SECRET } from '../../config';


const registerController = {
  async register(req, res) {
    const { username, email, password } = req.body;

    //hashing password
    const encrypted = CryptoJS.AES.encrypt(password, PASSWORD_SECRET).toString();

    const newUser = new User({ username, email, password: encrypted });
    try {
      const savedUser = await newUser.save();
      if (!savedUser) {
        res.status(401).json("user register error");
      }
    } catch (err) {
      console.log(err);
    }
    res.status(200).json({ msg: "user register successfully" });
  },
};

export default registerController;
