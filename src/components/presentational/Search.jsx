import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    render() {
        const {handleChange} = this.props;
        const {onSubmit} = this.props;
        const {search} = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <label>
                        <input type="text" name="search-bar" value={search} onChange={handleChange} placeholder="Search for new articles" />
                    </label>
                    <button>Search</button>
                </form> 
            </div>
        )
    }
}


Search.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired
};
