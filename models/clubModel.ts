import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import User from "./userModel";
import Court from "./courtModel"


const Club = sequelize.define(
  "Club",
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
    clubname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    tableName: "clubs",
    timestamps: false, // This is the default setting; you don't need to specify it explicitly
  }
);

// Club.belongsTo(User, { foreignKey: 'userid', as: 'user' });


export default Club;
