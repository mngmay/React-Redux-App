import React, { useState } from "react";
import { connect } from "react-redux";
import { filterMovie } from "../actions";

export const Search = props => {
  const [searchedMovie, setSearchedMovie] = useState("");
  console.log(props);

  const handleSearchChange = e => {
    setSearchedMovie(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.filterMovie(searchedMovie);
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        name="search"
        placeholder="Search Movies"
        onChange={handleSearchChange}
      />
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { filterMovie }
)(Search);
