import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { NavLink } from 'react-router-dom';

import './AuthorBadge.scss';



const AuthorBadge = (props) => {

    const {user} = props;

    if (props.user) {

        const userFullName = user.firstName + ' ' + user.lastName;
        return (
            <NavLink to={`/users/${ props.id }`}>
                <div className='authorBadge'>

                    <img src={user.avatar} alt={userFullName} className='authorBadge_avatar'/>
                    <span className='authorBadge_name'>{userFullName}</span>
                </div>
            </NavLink>
        )
    } else {
        return (
            <div className="authorBadge">
                <p>Загружаем...</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const { user } = state.firestore.data;

    // console.log(user);

    return {
        user
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'users',
            doc: props.id,
            storeAs: 'user'
        },
    ])
)(AuthorBadge);
