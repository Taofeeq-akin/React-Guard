import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
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
      const respond = await fetch(
        "https://react-movie-http-8779a-default-rtdb.firebaseio.com/movies.json"
      ); // Added movie.json cus it have to be addded wen using firbase

      if (!respond.ok) {
        throw new Error("Something went wrong");
      }
      const data = await respond.json();

      const loadedMovies = [];

      // i use for loop cus data return an object
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      // Transforming key name to props name used in my movieList

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // Will need useEffect cus fetch also gives a side effect
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMoviesHandler = async (movie) => {
    // Fetch can also be used to send data
    const response = await fetch(
      "https://react-movie-http-8779a-default-rtdb.firebaseio.com/movies.json",
      {
        // use to configure the out going effect
        method: "POST",
        body: JSON.stringify(movie), // use JSON object cus body want what its taking in json format
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchMoviesHandler();
  };

  let content = <p>Found no movie yet.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMoviesHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
