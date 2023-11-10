// src/components/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_KEY from "../config";
import Movie from "./Movie";
import "./Home.css";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <button onClick={searchMovies}>Search</button>
      <div className="movies">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Movie
                id={movie.id}
                title={movie.title}
                year={movie.release_date}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
