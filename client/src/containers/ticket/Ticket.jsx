import React, { Component } from 'react'
import axios from 'axios'


import Ticketlist from '../../components/ticketList/TicketList'
import TicketFInd from '../../components/ticketFind/TicketFind'

export default class Ticket extends Component {

    state = {
        departure: '',
        arrive: '',
        time: '',
        ticket: []
    }


    async componentDidMount() {
        await this.fetchFlight()
    }

    fetchFlight = async () => {
        const { departure, arrive, time } = this.state
        const { data } = await axios({
            method: 'GET',
            url: `http://localhost:8000/tickets?departure=${departure}&arrive=${arrive}&time=${time}`,
        })

        this.setState({
            ticket: await data
        },() => {
        })
    }

    handleOnChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleOnSubmit = async (e) => {
        console.log('ok')
        const { departure, arrive, time} = this.state
        e.preventDefault()
        this.props.history.push(`/ticket?departure=${departure}&arrive=${arrive}&time=${time}`)
        await this.fetchFlight()
    }

    render() {

        return (
            <div>
                <div className="row" >
                    <div className="col-12 col-sm-8">
                        <Ticketlist ticket={this.state.ticket} />
                    </div>
                    <div className="col-12 col-sm-4">
                        <TicketFInd submit={this.handleOnSubmit} change={this.handleOnChange} />
                    </div>
                </div>
            </div>
        )
    }
}
