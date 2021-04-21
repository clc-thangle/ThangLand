import React, { Component } from "react";

class SearchItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        return (
            <div className="submit-form">
                <div className="form-group" style={{ display: 'inline-block' }}>
                    <h4 htmlFor="description">Search</h4>
                    <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control" id="description" name="keyword" placeholder="Enter your search term" />
                </div>
                <button className="btn btn-success" onClick={this.onSearch} style={{ marginBottom: '5px', marginLeft: '15px' }}>Enter</button>
            </div>
        );
    }
}

export default SearchItem;