import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  products: [
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
  ],
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,   
  }
});

export default Order;
