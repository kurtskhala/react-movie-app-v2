import React from "react";
import "./style.css";

const MovieData = ({ data }) => {
  return (
    <div className="app-movie-info">
      <h1 className="app-movie-info-title">{data.title}</h1>
      <p className="app-movie-info-desc">{data.description}</p>
      <div className="app-movie-info-rating-cont">
        <span>Rating :</span>
        <div className="app-movie-info-rating">{data.rating}</div>
      </div>
      <iframe
        title="trailer"
        width="300"
        height="150"
        src={data.trailer_embed_link}
      ></iframe>
    </div>
  );
};

export default MovieData;
