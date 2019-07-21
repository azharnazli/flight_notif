import React, { Component } from 'react'
import axios from 'axios'

import './ticketFind.css'

export default class TicketFind extends Component {

    state = {
        list : []
    }

    async componentDidMount() {
        const { data } = await axios.get('http://localhost:8000/tickets/list')
        this.setState({list: data})
    }
    render() {
        const { list } = this.state
        const { change, submit } = this.props
        return (
            <div className="sticky" >
                <form onSubmit={(e)=> submit(e)} className="border rounded p-3 mr-3" >
                    <div className="form-group">
                        <label htmlFor="departure">Departure</label>
                        <select required onChange={(e)=>change(e)} className="form-control" name="departure" id="departure">
                        <option selected value="departure" disabled >departure</option>
                            { list.map( (el, idx) => (
                                <option value={el} key={idx} >{el}</option>
                            )) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="arrive">Arrive</label>
                        <select required onChange={(e)=>change(e)} className="form-control" name="arrive" id="arrive">
                            <option selected value="arrival" disabled >arrival</option>
                            { list.map( (el, idx) => (
                                <option value={el} key={idx} >{el}</option>
                            )) }
                        </select>
                    </div>
                    <div className="form-group">
                        <input required onChange={(e)=>change(e)} className="form-control" type="date" name="time" id="time" />
                    </div>
                    <input type="submit" className="btn btn-success btn-small"></input>
                </form>
            </div>
        )
    }
}
