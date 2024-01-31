import './App.css';
import Movies from "./components/Movies"

function App() {

  const movies = [
    {
      name: "The Shawshank Redemption",
      year: "1994",
      rating: "G",
      image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"

    },
    {
      name: "The Godfather",
      year: "1972",
      rating: "G",
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    },
    {
      name: "The Dark Knight",
      year: "2008",
      rating: "G",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"

    },
    {
      name: "Inception",
      year: "2010",
      rating: "G",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"

    },
    {
      name: "Forrest Gump",
      year: "1994",
      rating: "G",
      image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

    }
  ]

  return (
    <div className="App">
      <h1>Movie List</h1>
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
