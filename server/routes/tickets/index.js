const router = require('express').Router()
const TicketController = require('../../controllers/TicketController')


router.get('/', TicketController.fetchTicket)
router.get('/list', TicketController.airportList)

module.exports = router