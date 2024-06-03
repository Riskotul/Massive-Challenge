import Anjing from "../models/AnjingModel.js";

export const getAnjing = async (req, res) => {
  try {
    const anjing = await Anjing.findAll();
    res.json(anjing);
  } catch (error) {
    console.log(error);
  }
};
export const getAnjingById = async (req, res) => {
  try {
    const anjing = await Anjing.findOne({
      where: { id: req.params.id },
    });
    res.json(anjing);
  } catch (error) {
    console.log(error);
  }
};
