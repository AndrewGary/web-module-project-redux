import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { addFavorite } from '../actions/favoritesActions.js';

import * as actionCreators from '../actions/movieActions';

actionCreators = {...actionCreators, addFavorite: addFavorite}
import { connect } from 'react-redux'

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    console.log('actionCreators: ', actionCreators);
    console.log('addFavorite: ', addFavorite)

    const { movies } = props.movieReducer;
    
    const movie = movies.find(movie=>movie.id===Number(id));

    const handleDelete = e => {
        props.deleteMovie(movie.id);
        push('/movies');
    }

    const handleAddFavorite = e => {
        props.addFavorite(movie);
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span onClick={handleAddFavorite} className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input onClick={handleDelete} type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default connect(state => state, actionCreators)(Movie);