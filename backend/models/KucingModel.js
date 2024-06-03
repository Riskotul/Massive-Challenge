import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Kucing = db.define(
  "kucing",
  {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    race: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Kucing;
