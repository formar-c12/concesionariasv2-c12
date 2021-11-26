let {getAutos, getSucursales, writeJson} = require('../data/dataBase')


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
        let lastId = 1;

        getSucursales.forEach(sucursal => {
            if(sucursal.id > lastId){
                lastId = sucursal.id
            }
        });

        let nuevaSucursal = {
            id: lastId + 1,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            imagen: "sucursal.jpg" 
        }

        getSucursales.push(nuevaSucursal);

        writeJson(getSucursales)

        res.redirect('/admin/sucursales')
    } 

}


module.exports = controller