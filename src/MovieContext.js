import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
