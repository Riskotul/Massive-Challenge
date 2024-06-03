import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Anjing = db.define(
  "anjing",
  {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    race: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Anjing;
