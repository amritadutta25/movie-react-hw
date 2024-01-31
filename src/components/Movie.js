const Movie = ({movie}) => {

    return (
        <div className="movie">
            <div className="movie-image">
                <img src={movie.image} alt={movie.name}/>
            </div>
            <div className="movie-details">
                <div className="name">{movie.name}</div>
                <div className="year">Release year: {movie.year}</div>
                <div className="rating">Rating: {movie.rating}</div>
            </div>
        </div>
    )
    
}

export default Movie