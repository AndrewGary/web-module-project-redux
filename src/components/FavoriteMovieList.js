import React from 'react';
import * as actionCreators from '../actions/favoritesActions'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const {favorites} = props.favoritesReducer;

    const handleDelete = (e) => {
        console.log('propsssssss: ', e);
        props.removeFavorite(e.target.baseURI[e.target.baseURI.length - 1]);
    }
    
    if(props.favoritesReducer.displayFavorites === true){
        return (<div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {
                favorites.map(movie=>{
                    return <div  key={movie.id}>
                        <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                            {movie.title}
                            <span onClick={handleDelete}><span className="material-icons">remove_circle</span></span>
                        </Link> 
                    </div>
                })
            }
        </div>);
    }else{
        return null
    }
}


export default connect(state => state, actionCreators)(FavoriteMovieList);