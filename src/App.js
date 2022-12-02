import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Using fetch to connect to backend api
  // will use callBack cus fetchMoviesHandler will give infinite loop in useEffect

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // but since fetch will return promise i will use async function
      const respond = await fetch("https://swapi.dev/api/vehicles/");
      // Changed from films to vehicles

      if (!respond.ok) {
        throw new Error("Something went wrong");
      }
      const data = await respond.json();

      // Transforming key name to props name used in my movieList
      const transformedMovies = data.results.map((moviesData) => {
        return {
          id: moviesData.model,
          title: moviesData.name,
          releaseDate: moviesData.cargo_capacity,
          openingText: moviesData.manufacturer,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // Will need useEffect cus fetch also gives a side effect
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movie yet.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
