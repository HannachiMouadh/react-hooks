import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';

function App() {
  const [Movies, setMovies] = useState([
    {
      name: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      descrption: "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. ",
      rating: 1,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      name: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      descrption: "marketed as simply The Empire Strikes Back, is a 1980 film directed by Irvin Kershner and written by Leigh Brackett and Lawrence Kasdan from a story by George Lucas",
      rating: 2,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      name: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      descrption: "Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand",
      rating: 4,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }
  ]);
  const addMovie=(newMovie)=>{
    setMovies([...Movies,newMovie])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie list</h1>
        <AddMovie addMovie={addMovie}/>
    <MovieList Movies={Movies}/>
    </header>
    </div>
  );
}

export default App;
