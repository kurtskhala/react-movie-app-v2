import React from "react";
import Movies from "../../components/movies/Movies";
import { PacmanLoader } from "react-spinners";
import { useMovieFetch } from "../../hooks/useMovieFetch";

const AllMovies = () => {
  const [data, error, isLoading] = useMovieFetch("");
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
        <div>
          <Movies data={data} />
        </div>
      )}
    </>
  );
};

export default AllMovies;
