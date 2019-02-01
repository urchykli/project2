const express = require('express')
const router = express.Router()
const petController = require('../controllers/pet')

router.post('/', petController.create)
router.get('/new', petController.new)
router.get('/:id', petController.show)
router.patch('/:id', petController.update)
router.delete('/:id', petController.delete)
router.get('/:id/edit', petController.edit)

module.exports = router