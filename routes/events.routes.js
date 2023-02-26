const {Router} = require('express')
const router = Router()
const { check } = require('express-validator')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events.controller')
const { isDate } = require('../helpers/isDate')
const { validarCampos } = require('../middlewares/validarCampos')
const { validarJWT } = require('../middlewares/validarJWT')

router.use(validarJWT)

router.get('/', getEventos)

router.post('/', [
  check('title', 'El titulo es obligatiorio').notEmpty(),
  check('start', 'Fecha de inicio es obligatoria').custom(isDate),
  check('end', 'Fecha de finalización es obligatoria').custom(isDate),
  validarCampos
], crearEvento)

router.put('/:id',[
  check('title', 'El titulo es obligatiorio').notEmpty(),
  check('start', 'Fecha de inicio es obligatoria').custom(isDate),
  check('end', 'Fecha de finalización es obligatoria').custom(isDate),
  validarCampos
], actualizarEvento)

router.delete('/:id', eliminarEvento)

module.exports = router