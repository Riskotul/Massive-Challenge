import Kucing from "../models/KucingModel.js";

export const getKucing = async (req, res) => {
  try {
    const kucing = await Kucing.findAll();
    res.json(kucing);
  } catch (error) {
    console.log(error);
  }
};
export const getKucingById = async (req, res) => {
  try {
    const kucing = await Kucing.findOne({
      where: { id: req.params.id },
    });
    res.json(kucing);
  } catch (error) {
    console.log(error);
  }
};
