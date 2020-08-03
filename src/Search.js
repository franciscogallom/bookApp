import React from 'react';

class Search extends React.Component {
    onChange = (e) => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onSearch(query)
    }

    render () {
        return (
            <input type="text" placeholder="Search book." onChange={this.onChange} />
        );
    }
}

export default Search;