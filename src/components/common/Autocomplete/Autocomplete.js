import React, { Component } from 'react';

import './Autocomplete.scss';

class Autocomplete extends Component {
    state = {
        value: '',
        suggestions: []
    };

    changeHandler = ({ target }) => {
        const { getSuggestions } = this.props;
        const { value } = target;

        this.setState({ value });

        if (!value) {
            this.setState({ suggestions: [] });

            return;
        }

        const suggestions = getSuggestions(value);

        this.setState({ suggestions });
    }

    clickHandler = (id, value) => {
        const { onChange } = this.props;

        onChange && onChange(id, value);

        this.setState({ value, suggestions: [] });
    }

    render() {
        const { inputClassName, placeholder } = this.props;
        const { value, suggestions } = this.state;

        return (
            <React.Fragment>
                <input type="text" className={inputClassName} placeholder={placeholder} value={ value } onChange={this.changeHandler} />
                { !!suggestions.length && (
                    <ul className="autocomplete-list">
                        {
                            suggestions.map(
                                ({ id, title }) => (
                                    <li key={id} onClick={() => this.clickHandler(id, title)}>{title}</li>
                                )
                            )
                        }
                    </ul>
                )}
            </React.Fragment>
        )
    };
}

export default Autocomplete;