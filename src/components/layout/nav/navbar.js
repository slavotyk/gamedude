import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from './../landing/SearchBar/SearchBar';

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        <header className="navigationContainer" itemscope itemtype="https://schema.org/WPHeader">
            <nav className="navigationWrapper" itemscope itemtype="https://schema.org/SiteNavigationElement">

                <NavLink to='/' className='logo'> </NavLink>
                <SearchBar/>
                <div className="userAuth">
                    {links}
                </div>
            </nav>
        </header>
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
