const express = require('express')
const router = express.Router()
const volunteerController = require('../controllers/volunteer')

router.post('/', volunteerController.create)
router.get('/new', volunteerController.new)
router.get('/:id', volunteerController.show)
// router.patch('/:id', volunteerController.update)
router.delete('/:id', volunteerController.delete)
// router.get('/:id/edit', volunteerController.edit)

module.exports = router