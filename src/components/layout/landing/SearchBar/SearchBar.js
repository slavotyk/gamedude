import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { search } from '../../../../store/actions/searchActions';

import './SearchBar.scss';

export class SearchBar extends Component {
    state = {
        value: this.props.value
    };

    onChangeValue = (event) => {
        this.setState({ value: event.target.value });
    };

    onClick = () => {
        this.searchQuery();
    };

    onKeyUp = (event) => {
        if(event.keyCode === 13) {
            this.searchQuery();
        }
    };

    searchQuery = () => {
        const { search, history } = this.props;
        const { value } = this.state;

        search(value);

        history.push('/search');
    };

    render() {
        const { value } = this.state;

        return (
            <div className='search'>
                <input className='search__input' type='search' placeholder='Поиск на портале...' value={ value } onChange={ this.onChangeValue } onKeyUp={this.onKeyUp}/>
                <button className='search__button' onClick={this.onClick}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.search.query
    };
}

export default connect(mapStateToProps, { search })(withRouter(SearchBar));