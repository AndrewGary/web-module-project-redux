import React from 'react';
import { Link } from 'react-router-dom';
import * as favoriteActions from '../actions/favoritesActions'
import * as movieActions from '../actions/movieActions';

const actionCreators = { ...favoriteActions, ...movieActions }
import { connect } from 'react-redux'

const MovieHeader = (props) => {

    console.log("as;dlkfjasdl;fkja: ", props);
    const appTitle = props.appTitle;
    const displayFavorites = true;

    const handleClick = () => {
        props.toggleFavorites();
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={handleClick} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

export default connect(state => state, actionCreators)(MovieHeader);