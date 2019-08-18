import React, { useState } from "react";
import MoviesNav from "./components/MoviesNav";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import { Search } from "./components/Search";

function App() {
  const [list, setList] = useState("movies");

  return (
    <div className="App">
      <Header />
      <MoviesNav setList={setList} />
      <Search />
      <MoviesList list={list} />
    </div>
  );
}

export default App;
