import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$70",
      id: 12456
    },
    {
      name: "Titanic",
      price: "$30",
      id: 1245655788
    },
    {
      name: "Fight Club",
      price: "$150",
      id: 124565757555
    }
  ]);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} />
      ))}
    </div>
  );
};

export default MovieList;
