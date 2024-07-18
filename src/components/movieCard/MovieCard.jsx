import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <Link to={`/movies/${data.id}`}>
      <div className="app-movies-card">
        <img className="app-movies-card-img" alt="poster" src={data.image} />
        <h5 className="app-movies-card-moviename">{data.title}</h5>
      </div>
    </Link>
  );
};

export default MovieCard;
