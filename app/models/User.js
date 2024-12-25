const sequelize = require("@config/database");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
    defaultScope: {
      attributes: {
        include: ["kyc_status", "dob", "phone", "bvn"],
        excludes: [],
      },
      raw: false,
    },
  }
);

module.exports = User;
