'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    title: DataTypes.STRING,
    descination: DataTypes.STRING,
    id: DataTypes.STRING,
    qType: DataTypes.STRING,
    option: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};