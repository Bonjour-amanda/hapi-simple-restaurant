'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class submenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      submenu.associate = function (models) {
        submenu.belongsTo(models.menu, {
          onDelete: 'CASCADE',
          foreignKey: 'menuId'
        })
      }
    }
  };
  submenu.init({
    menuId: DataTypes.INTEGER,
    label: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'submenu',
  });
  return submenu;
};