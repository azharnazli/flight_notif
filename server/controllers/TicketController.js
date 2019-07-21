const ticket = require('../helpers/puppeteer')
const Airport = require('../helpers/airportlist')

class TicketController {

    static fetchTicket(req, res) {
        const { departure, arrive, time } = req.query
        ticket(departure, arrive, time)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static airportList(req, res) {
        Airport.readFile((err, data) => {
            if(err) {
                res.status(500).json(err)
            } else {
                res.status(200).json(data)
            }
        })
        
    }


}

module.exports = TicketController