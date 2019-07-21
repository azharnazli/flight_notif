import React, { Component } from 'react'

class TicketList extends Component {
    render() {
        const { ticket } = this.props

        return (
            <div className="d-flex justify-content-center">
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" >No. </th >
                                <th scope="col" >Company</th >
                                <th scope="col" >Time</th >
                                <th scope="col" >price</th >
                                <th scope="col" >Logo</th >
                                <th scope="col" >Alert</th >
                            </tr>
                        </thead>
                        <tbody>
                    { ticket.map ((el, idx) => (
                            <tr key={idx}>
                                <th scope="row" >{idx+1}</th>
                            <td>{el.company}</td>
                            <td>{el.time}</td>
                            <td>{el.price}</td>
                            <td><img src={ el.logo } alt="company_logo"/></td>
                            <td> <input type="checkbox" name="alert" id="alert"/> </td>
                            </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TicketList