import Edit from "../models/EditModel.js";

// Fungsi untuk mendapatkan data berdasarkan ID
export const getEditById = async (req, res) => {
  try {
    const edit = await Edit.findOne({
      where: { id: req.params.id },
    });
    if (!edit) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.json(edit);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Fungsi untuk memperbarui data berdasarkan ID
export const updateEditById = async (req, res) => {
  const { name, job, gender, email, birthdate, phone, address, profileImage } = req.body;
  try {
    const edit = await Edit.findOne({ where: { id: req.params.id } });
    if (!edit) return res.status(404).json({ msg: "Data tidak ditemukan" });

    await Edit.update(
      {
        name: name || edit.name,
        job: job || edit.job,
        gender: gender || edit.gender,
        email: email || edit.email,
        birthdate: birthdate || edit.birthdate,
        phone: phone || edit.phone,
        address: address || edit.address,
        profileImage: profileImage || edit.profileImage,
      },
      { where: { id: req.params.id } }
    );
    res.json({ msg: "Data berhasil diperbarui" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
