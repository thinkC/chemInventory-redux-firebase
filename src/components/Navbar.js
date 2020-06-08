import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth, profile } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Inventory App</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Inventory</Link>
                        </li>
                        <li className="navbar-item">
                            {links}
                        </li>

                        {/* <li className="navbar-item">
                            <SignedInLinks />
                        </li>
                        <li className="navbar-item">
                            <SignedOutLinks />
                        </li> */}

                    </ul>
                </div>
            </nav>
            <header className="masthead">
                <div className="container">
                    {/* <input placeholder="search" /> */}
                </div>
            </header>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);