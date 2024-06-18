import usermodel from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from "../utils/hashpassword.js";
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        message: "please fill the form completely",
        success: false,
      });
    }

    const userExist = await usermodel.findOne({ email });
    if (!userExist) {
      return res.status(401).send({
        message: "User is not registered",
        success: false,
      });
    }
    const userPassword = await comparePassword(password, userExist.password);
    if (!userPassword) {
      return res.status(401).send({
        message: "Authentication failed",
        success: false,
      });
    }
    const token = jwt.sign(
      { user_id: userExist._id, isAdmin: userExist.isAdmin },
      process.env.JWT_KEY
    );
    console.log(token);
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    return res
      .cookie("accessToken", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .send({
        message: "user successfully loggedIn",
        success: true,
        username: userExist.username,
        isAdmin: userExist.isAdmin,
      });
  } catch (e) {
    return res.status(500).send({
      e,
    });
  }
};

const registerController = async (req, res) => {
  console.log("hi Iam reigste");
  try {
    const { username, phone, email, password } = req.body;
    if (!username || !phone || !email || !password) {
      return res.status(401).send({
        message: "please fill the form completely",
        success: false,
      });
    }

    const userExist = await usermodel.findOne({ email });
    console.log(userExist);
    if (userExist) {
      return res.status(401).send({
        message: "user already registered please login",
        success: false,
      });
    }
    const hashedpassword = await hashPassword(password);

    const newUser = await new usermodel({
      username,
      email,
      password: hashedpassword,
      phone,
      ip: req.ip,
    }).save();

    const responseUser = {
      username: newUser.username,
      email: newUser.email,
    };
    console.log(newUser);
    return res.status(200).send({
      message: "user registered successfully",
      success: true,
      user: responseUser,
    });
  } catch (e) {
    console.log("server catch");
    console.log(e);
    return res.status(500).send(e);
  }
};
export { loginController, registerController };
