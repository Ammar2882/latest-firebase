import React, { Component } from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchB>
      <input type="text" placeholder="Search.." />
    </SearchB>
  );
};

export default SearchBar;

const SearchB = styled.div`
  > input {
    height: 50px;
    width: 300px;
  }
`;
