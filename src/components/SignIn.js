import React, { Component } from 'react'

export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <h4 className="text-center">Sign In</h4>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="username" >Email</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} value={this.state.email} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange} value={this.state.password} />

                    </div>

                    <div className="form-group center">
                        <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                    </div>

                </form>
            </div>
        )
    }
}
