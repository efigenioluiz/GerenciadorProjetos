const express = require('express')
const router = express.Router()
const projectController = require('../controller/ProjectController')
const projectValidation = require('../middleware/ProjectValidation')

router.get('/count', projectController.count)

router.post('/', projectValidation, projectController.create)
router.get('/', projectController.read)
router.put('/:id', projectValidation, projectController.update)
router.delete('/:id', projectController.delete)
router.get('/:id', projectController.show)
router.put('/finish/:id', projectController.finish)
router.get('/filter/type/:value', projectController.filter_type)
router.get('/filter/finish/:value', projectController.filter_finish)
router.get('/filter/month', projectController.filter_month)
router.get('/filter/year', projectController.filter_year)


module.exports = router