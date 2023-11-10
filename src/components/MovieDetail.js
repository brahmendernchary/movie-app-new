// src/components/MovieDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_KEY from "../config";
import Movie from "./Movie";
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Movie
        id={movie.id}
        title={movie.title}
        year={movie.release_date}
        poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    </div>
  );
};

export default MovieDetail;
