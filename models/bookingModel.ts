import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import User from "./userModel";
import Club from "./clubModel";
import Court from "./courtModel";

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
    clubid: {
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
    slot:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "bookings",
    timestamps: false,
  }
);

// Booking.belongsTo(User, { foreignKey: 'userid', as: 'user' });
// Booking.belongsTo(Club, { foreignKey: 'clubid', as: 'club' });
// Booking.belongsTo(Court, { foreignKey: 'courtid', as: 'court' });

export default Booking;
