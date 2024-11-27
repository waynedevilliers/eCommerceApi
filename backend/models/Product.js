import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

const Product = sequelize.define("Product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
            },
        },
        categoryId : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Category",
                key: "id",
            },
        },
    });

export default Product;