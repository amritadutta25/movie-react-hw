import Movie from "./Movie"

const Movies = (props) => {

    return (
        <div className="movies">
            {props.movies.map((m, index) => {
                return <Movie key={index} movie={m} />
            })}
        </div>
    )
}

export default Movies