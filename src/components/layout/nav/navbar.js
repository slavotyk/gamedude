import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        <nav className="navigationContainer">
            <div className="navigationWrapper">

                <NavLink to='/' className='logo'> </NavLink>
                <div className="userAuth">
                    {links}
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
