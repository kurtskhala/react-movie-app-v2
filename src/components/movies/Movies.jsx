import React, { useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import "./style.css";
import { moviesLimit } from "../../constants";

const Movies = ({ data }) => {
  const [curPage, setCurPage] = useState(1);
  const nOfPages = Array.from(
    { length: Math.ceil(data.length / moviesLimit) },
    (_, i) => i + 1,
  );
  return (
    <>
      <div className="app-movies">
        {data?.map((movie, id) => {
          if (id >= curPage * 10 - 10 && id < curPage * 10) {
            return <MovieCard key={movie.id} data={movie} />;
          }
        })}
      </div>
      <div className="app-movies-pages">
        {nOfPages.map((page) => (
          <button
            className={curPage === page ? "active" : ""}
            onClick={() => {
              setCurPage(page);
              window.scrollTo(0, 0);
            }}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Movies;
