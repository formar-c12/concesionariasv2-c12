let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')

/* Get - Home admin */
router.get('/', controller.adminIndex)
/* Get - Lista las sucursales */
router.get('/sucursales', controller.sucursales)
/* Get - Formulario de carga (Sucursales) */
router.get('/agregarSucursal', controller.create)
/* POST - Recibe data del formulario */
router.post('/agregarSucursal', controller.store)


module.exports = router