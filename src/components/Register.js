import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/actions/authActions';

class Register extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state)
        this.props.register(this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <h4 className="text-center">Register</h4>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="lastName" >First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={this.handleChange} value={this.state.firstName} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" >Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={this.handleChange} value={this.state.lastName} />

                    </div>
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
                            Register
                    </button>
                        <div className="text-danger">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(register(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)