// Movie.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Movie.css";
const Movie = ({ id, title, year, poster }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the details screen for the specific movie
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie" onClick={handleClick}>
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={poster} alt={`${title} poster`} />
    </div>
  );
};

export default Movie;
