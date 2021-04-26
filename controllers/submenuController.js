const {
    menu,
    submenu
} = require("../models")

const Sequelize = require('sequelize')
const Op = Sequelize.Op

class SubmenuController {

    // GET ALL Submenu
    async getAllSubmenu(req, h) {
        try {
            const allSubmenu = await submenu.findAll({})
            return {
                allSubmenu: allSubmenu
            };

        } catch (err) {
            return {
                err
            };
        }

    }

    // GET ONE SINGLE MENU BY ID
    async getOneSubmenuId(req, h) {
        try {
            const oneSubmenuId = await submenu.findOne({
                where: {
                    id: req.params.id
                }
            })
            return {
                oneSubmenuId
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
            const oneSubmenuLabel = await submenu.findOne({
                where: {
                    label: req.params.label
                }
            })
            return {
                oneSubmenuLabel
            }
        } catch (err) {
            return {
                err
            }
        }

    }

    // CREATE NEW MENU 
    async addSubmenu(req, h) {
        try {
            const dataSubmenu = {
                menuId: req.payload.menuId,
                label: req.payload.label,
                price: req.payload.price
            }

            const addsubmenu = await menu.create(dataSubmenu)

            return {
                message: "submenu created successfully",
                addsubmenu: addsubmenu
            }


        } catch (err) {
            return {
                err
            }
        }
    }

    // UPDATE MENU
    async updateSubmenu(req, h) {
        try {
            const updatesubmenu = await submenu.update({
                menuId: req.payload.menuId,
                label: req.payload.label,
                price: req.payload.price
            }, {
                where: {
                    id: req.params.id
                }
            })
            return {
                status: "success",
                updatesubmenu: updatesubmenu,
                message: "submenu has been sucessfully updated"
            }

        } catch (err) {
            return {
                err: err,
                status: "Error!",
                message: "failed updating submenu"
            }
        }

    }

    // DELETE MENU
    async deleteSubmenu(req, h) {
        try {
            const deletesubmenu = await submenu.destroy({
                where: {
                    id: req.params.id
                }
            })
            return {
                deletesubmenu
            }

        } catch (err) {
            return {
                err: err,
                status: "Error!",
                message: "failed delete submenu"
            }
        }

    }

}

module.exports = new SubmenuController;