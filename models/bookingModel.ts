// import { DataTypes } from "sequelize";
// import sequelize from "../config/db";
// import User from "./userModel";
// import Club from "./clubModel";
// import Court from "./courtModel";

// const Booking = sequelize.define(
//   "Booking",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     userid: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     clubid: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     courtid: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },

//     time: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     hour:{
//       type: DataTypes.STRING,
//       allowNull:false,
//     },
//     Player:{
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     slot: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "bookings",
//     timestamps: false,
//   }
// );


// export default Booking;

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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playerCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "bookings",
    timestamps: false,
  }
);

export default Booking;
