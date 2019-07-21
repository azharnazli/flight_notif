import React, { Component } from 'react'

export default class RegisterForm extends Component {
    render() {
        const { onChange, onSubmit  } = this.props
        return (

            <div>
                <div className="register-form container d-flex justify-content-center">
                    <div className="form-container">
                        <form onSubmit={(e)=>onSubmit(e)}>
                            <div className="row">
                                <div className="form-title col-sm-12">
                                    <h1 className="text-center font-weight-bold">Register</h1>
                                </div>
                                <div className="col-sm-12 col-md-6 form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input onChange={(e)=> onChange(e)} className="form-control" type="email" name="email" id="email"/>
                                </div>
                                <div className="col-sm-12 col-md-6 form-group">
                                    <label htmlFor="password">Password: </label>
                                    <input onChange={(e)=> onChange(e)} className="form-control" type="password" name="password" id="password"/>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <input className="btn text-center btn-success btn-small" type="submit" value="register"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
