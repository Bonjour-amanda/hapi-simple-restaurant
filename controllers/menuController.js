const {
    menu,
    submenu
} = require("../models")

const Sequelize = require('sequelize')
const Op = Sequelize.Op

class MenuController {

    // GET ALL MENU
    async getAllMenu(req, h) {
        try {
            const allMenu = await menu.findAll({
                include: [{
                    model: submenu
                }]
            })
            return {
                allMenu
            };

        } catch (err) {
            return {
                err
            };
        }

    }

    // GET ONE SINGLE MENU BY ID
    async getOneMenuId(req, h) {
        try {
            const oneMenuId = await menu.findOne({
                include: [{
                    model: submenu
                }],
                where: {
                    id: req.params.id
                }
            })
            return {
                oneMenuId
            }

        } catch (err) {
            return {
                err
            }
        }

    }

    // GET ONE SINGLE MENU BY LABEL 
    async getOneMenuLabel(req, h) {
        try {
            const oneMenuLabel = await menu.findOne({
                include: [{
                    model: submenu
                }],
                where: {
                    label: req.params.label
                }
            })
            return {
                oneMenuLabel
            }
        } catch (err) {
            return {
                err
            }
        }

    }

    // CREATE NEW MENU 
    async addMenu(req, h) {
        try {
            const dataMenu = {
                label: req.payload.label,
                price: req.payload.price,
                description: req.payload.description
            }

            const addmenu = await menu.create(dataMenu)

            return {
                message: "menu created successfully",
                addmenu: addmenu
            }


        } catch (err) {
            return {
                err
            }
        }
    }

    // UPDATE MENU
    async updateMenu(req, h) {
        try {
            const updatemenu = await menu.update({
                label: req.payload.label,
                price: req.payload.price,
                description: req.payload.description
            }, {
                where: {
                    id: req.params.id
                }
            })
            return {
                status: "success",
                updatemenu: updatemenu,
                message: "menu has been sucessfully updated"
            }

        } catch (err) {
            return {
                err: err,
                status: "Error!",
                message: "failed updating menu"
            }
        }

    }

    // DELETE MENU
    async deleteMenu(req, h) {
        try {
            const deletemenu = await menu.destroy({
                where: {
                    id: req.params.id
                }
            })
            return {
                deletemenu
            }

        } catch (err) {
            return {
                err: err,
                status: "Error!",
                message: "failed delete menu"
            }
        }

    }

}

module.exports = new MenuController;