import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Club from "./clubModel";

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    courtid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    time: {
      type: DataTypes.DATE, // Time with date
      allowNull: false,
    },
  },
  {
    tableName: "bookings",
    timestamps: false,
  }
);

export default Booking;
