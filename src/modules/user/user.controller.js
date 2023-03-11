import { userModel } from "../../../database/models/user/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/generteToken.js";
//tlds:{allow:['com','net']}}
const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  
    const user = await userModel.findOne({ email });
    if (user) {
      res.json({ message: "email is already exist " });
    } else {
      bcrypt.hash(
        password,
        Number(process.env.ROUND),
        async function (err, hash) {
          await userModel.insertMany({ name, email, password: hash });
          res.json({ message: "user Added" });
        }
      );
    }
  
};
const signIn = async (req, res) => {
  let user = await userModel.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      let token = generateToken({
        name: user.name,
        userId: user._id,
        role: user.role,
      });
      // login
      res.json({ message: "Login", token });
    } else {
      // password incorrect
      res.json({ message: "in correct password " });
    }
  } else {
    res.json({ message: "Account not found " });
  }
};
export { signUp, signIn };
