import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const createUser = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok!" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "User berhasil ditambahkan" });
  } catch (error) {
    console.log(error);
  }
};
