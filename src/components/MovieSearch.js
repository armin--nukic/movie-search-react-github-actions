// src/MovieSearch.js
import React, { useState } from "react";
import "../MovieSearch.css";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "Forrest Gump",
    "Inception",
    "Fight Club",
    "The Matrix",
    "Goodfellas",
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    setFilteredMovies(
      movies.filter((movie) =>
        movie.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="movie-search-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="movie-list">
        {filteredMovies.map((movie, index) => (
          <li key={index} className="movie-item">
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
