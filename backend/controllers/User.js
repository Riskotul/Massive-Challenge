import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

// Fungsi untuk mendapatkan semua pengguna
export const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Fungsi untuk membuat pengguna baru
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
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Fungsi untuk memperbarui pengguna berdasarkan ID
export const updateUser = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

    let hashPassword;
    if (password) {
      if (password !== confPassword)
        return res
          .status(400)
          .json({ msg: "Password dan Confirm Password tidak cocok!" });
      const salt = await bcrypt.genSalt();
      hashPassword = await bcrypt.hash(password, salt);
    }

    await User.update(
      {
        name: name || user.name,
        email: email || user.email,
        password: hashPassword || user.password,
      },
      { where: { id: req.params.id } }
    );
    res.json({ msg: "User berhasil diperbarui" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
