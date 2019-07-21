import React, { Component } from 'react'

import axios from 'axios'

import LoginForm from '../../components/Login/LoginForm'

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    onHandleSubmit = (e) => {
        const { email, password } = this.state
        e.preventDefault()
        axios.post('http://localhost:8000/users/login',{
            email,
            password
        })
        .then(({data}) => {
            localStorage.setItem('token', data.token)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <LoginForm onChange={this.onHandleChange} onSubmit={this.onHandleSubmit} />
            </div>
        )
    }
}
