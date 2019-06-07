import React, {Component} from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    state = {
        value: ''
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
        console.log(this.state.value);
    };

    render() {
        return (
            <div className='searchBar'>
                <input className='searchInput' type='search' placeholder='Что ищешь, странник?' onChange={ this.onChangeValue } onKeyUp={this.onKeyUp}/>
                <button className='searchButton' onClick={this.onClick}/>
            </div>
        );
    }
}

export default SearchBar;