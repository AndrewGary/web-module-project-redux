export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE';

export const deleteMovie = (id)=>{
    console.log('iniside deleteMovie')
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) => {
    return(
        {type: ADD_MOVIE, payload: movie}
    )
}