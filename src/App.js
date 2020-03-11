import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

const App = () => {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
