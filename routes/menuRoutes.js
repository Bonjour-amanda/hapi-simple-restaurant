// const Hapi = require('hapi');

const menuController = require('../controllers/menuController');

module.exports = [{

  method: 'GET',
  path: '/allMenu',
  handler: menuController.getAllMenu,

}, {
  method: 'GET',
  path: '/oneMenuId/{id}',
  handler: menuController.getOneMenuId,
}, {
  method: 'GET',
  path: '/oneMenuLabel/{label}',
  handler: menuController.getOneMenuLabel,
}, {
  method: 'POST',
  path: '/addMenu',
  handler: menuController.addMenu,
}, {
  method: 'PUT',
  path: '/updateMenu/{id}',
  handler: menuController.updateMenu,
}, {
  method: 'DELETE',
  path: '/deleteMenu/{id}',
  handler: menuController.deleteMenu,
}]