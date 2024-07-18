import React from "react";
import { useParams } from "react-router-dom";
import { useMovieFetch } from "../../hooks/useMovieFetch";
import MovieData from "../../components/movieData/MovieData";
import { PacmanLoader } from "react-spinners";
import "./style.css";

const Movie = () => {
  const data = useParams();
  const [movie, error, isLoading] = useMovieFetch(data.movieId);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <PacmanLoader color="#36d7b7" size={25} />
      ) : (
        <div className="app-movie">
          <img className="app-movie-img" alt="movie" src={movie.image} />
          <MovieData data={movie} />
        </div>
      )}
    </>
  );
};

export default Movie;
