import React from "react";
import { SearchBarContainer } from "./mainDashboardStyles";
import TextField from '@material-ui/core/TextField'

export default function SearchBar({ handleUserSearchText, userSearchInput }) {
  return (
    <SearchBarContainer>
      <TextField onChange={handleUserSearchText} value={userSearchInput} label="Search a Country"/>
    </SearchBarContainer>
  );
}
