import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectID } from "../feautures/saveToggle";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
  const disable = useSelector(selectID);

  return (
    <div>
      {movies?.length
        ? movies.map((m) => (
            <MovieListItem movie={m} key={m.imdbID} disable={!!disable} />
          ))
        : "There are no content yet..."}
    </div>
  );
};

export default MovieList;
