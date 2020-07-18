import React from "react";

export default function SearchBar({ handleUserSearchText, userSearchInput }) {
  return (
    <div>
      <input onChange={handleUserSearchText} value={userSearchInput} />
    </div>
  );
}
