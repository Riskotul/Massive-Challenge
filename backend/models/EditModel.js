import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Edit = db.define(
  "edit",
  {
    name: DataTypes.STRING,
    job: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    profileImage: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Edit;
