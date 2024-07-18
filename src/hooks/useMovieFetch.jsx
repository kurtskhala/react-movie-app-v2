import { useState, useEffect } from "react";

export const useMovieFetch = (id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMovie(id) {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        return result;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    fetchMovie(id)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [data, error, isLoading];
};
