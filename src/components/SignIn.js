import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
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
        //console.log(this.state);
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/" />
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
                        <div>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)