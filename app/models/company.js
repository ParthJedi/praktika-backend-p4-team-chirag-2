'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: 'users',
        referencesKey: 'id',
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companySize: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      industry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      values: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      benefits: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedIn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      glassdoor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      crunchBase: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'company',
    }
  );

  return Company;
};
