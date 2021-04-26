// const Hapi = require('hapi');

const submenuController = require('../controllers/submenuController');

module.exports = [{

  method: 'GET',
  path: '/allSubmenu',
  handler: submenuController.getAllSubmenu,
}, {
  method: 'GET',
  path: '/oneSubmenuId/{id}',
  handler: submenuController.getOneSubmenuId,
}, {
  method: 'GET',
  path: '/oneSubmenuLabel/{label}',
  handler: submenuController.getOneMenuLabel,
}, {
  method: 'POST',
  path: '/addSubmenu',
  handler: submenuController.addSubmenu,
}, {
  method: 'PUT',
  path: '/updateSubmenu/{id}',
  handler: submenuController.updateSubmenu,
}, {
  method: 'DELETE',
  path: '/deleteSubmenu/{id}',
  handler: submenuController.deleteSubmenu,
}]