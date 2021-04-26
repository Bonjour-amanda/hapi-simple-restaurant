'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('submenus', [{
      menuId: 1,
      label: 101,
      price: 5000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 1,
      label: 102,
      price: 6000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 1,
      label: 103,
      price: 7000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 2,
      label: 201,
      price: 3000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 2,
      label: 202,
      price: 2000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 3,
      label: 301,
      price: 9000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }, {
      menuId: 3,
      label: 302,
      price: 8000,
      createdAt: "2020-01-01",
      updatedAt: "2020-02-01"
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('submenus', null, {})
  }
};