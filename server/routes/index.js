const router = require('express').Router()

const ticketRoutes = require('./tickets')
const userRoutes = require('./users')


router.use('/tickets', ticketRoutes)
router.use('/users', userRoutes)

module.exports = router