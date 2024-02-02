import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { MovieCart } from "./Components/MovieCart/Moviecart";
import { Search } from "./Components/Search/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");


  const getMovies = async () => {
    try {
      let apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=4aafe7c75451f3674a0be872d6881288";

      if (searchFilter) {
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=4aafe7c75451f3674a0be872d6881288&query=${searchFilter}`;
      }

      const { data } = await axios.get(apiUrl);
      setMovies(data.results);
   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    getMovies();

  }, [searchFilter]);

  return (
    <div className="App">
      <div>
        <h1 className="header">Movies Data</h1>
      </div>
      <Search onSearchFilterChange={setSearchFilter} />
      <main className="main">
        {
          movies && movies.length > 0 && movies.map(movie => <MovieCart key={movie.id} movie={movie}/>)
        }
      </main>
    </div>
  );
}

export default App;
