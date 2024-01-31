const Movie = ({movie}) => {
    console.log(movie)

    return (
        <div className="movie">
            <div className="movie-details">
                <div className="name">{movie.name}</div>
                <div className="year">{movie.year}</div>
                <div className="rating">{movie.rating}</div>
            </div>
        </div>
    )
    
}

export default Movie