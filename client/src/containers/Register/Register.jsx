import React, { Component } from 'react'
import axios from 'axios'

import RegisterFrom from '../../components/Register/RegisterForm'


export default class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleOnSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = this.state

        await axios({
            method: 'POST',
            url: 'http://localhost:8000/users/',
            data: {
                email,
                password
            }
        })

        await this.props.history.replace('/')

    }


    render() {
        return (
            <div>
                <RegisterFrom onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} />
            </div>
        )
    }
}
