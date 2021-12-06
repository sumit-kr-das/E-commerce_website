import { User } from "../../models";
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";
import { PASSWORD_SECRET, JWT_SECRET } from "../../config";

const loginController = {
    async login(req,res){
        try{
            if(!req.body.username && !req.body.username){
                return res.status(401).json({ msg: "1 wrong credentials" });
            }
            const user = await User.findOne({ username: req.body.username });
            // !user && res.status(401).json({ msg: "2 wrong credentials" });
            if(!user){
                return res.status(401).json({ msg: "2 wrong credentials" });
            }

            // decrypt password
            const decrypted = CryptoJS.AES.decrypt(user.password, PASSWORD_SECRET);
            const decryptedPass = decrypted.toString(CryptoJS.enc.Utf8);

            // decryptedPass !== req.body.password && res.status(401).json({ msg: "3 wrong credentials" });
            if(decryptedPass !== req.body.password){
                return res.status(401).json({ msg: "3 wrong credentials" });
            }



            // generate jwt
            const accessToken = Jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                JWT_SECRET,
                { expiresIn:"3d" }
            );

            // send information without password
            const { password, ...others } = user._doc;

            res.status(200).json({ ...others, accessToken });
        }catch(err){
            res.status(500).json(err.message);
        }
    }
}

export default loginController;