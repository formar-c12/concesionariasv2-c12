let {getAutos, getSucursales} = require('../data/dataBase')


let controller = {
    adminIndex: (req, res) => {
        res.render('admin/adminIndex')
    },
    sucursales: (req, res) => {
        res.render('admin/adminSucursales', {
            sucursales: getSucursales,
            autos: function (idSucursal) {
                return getAutos.filter(auto => auto.sucursal === idSucursal)
            }
        })
    },
    create: (req, res) => {
        res.render('admin/agregarSucursal')
    },
    store: (req, res) => {
        res.send(req.body)
    } 

}


module.exports = controller