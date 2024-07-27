import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import Club from "./clubModel";
import Booking from "./bookingModel";

const Court = sequelize.define(
  "Court",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    slot: {
      type: DataTypes.JSON, // JSON type to store time and price information
      allowNull: false,
      // Example: [{"duration": 60, "price": 20}, {"duration": 90, "price": 30}]
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

  },
  {
    tableName: "courts",
    timestamps: false,
  }
);

// Court.belongsTo(Club, {
//     foreignKey: 'clubId',
//     as: 'club'
// });

// Booking.belongsTo(Court, {
//     foreignKey: 'courtid',
//     as: 'court',
//   });

export default Court;
