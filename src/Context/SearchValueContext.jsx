/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SearchValueContext = createContext();
const SearchValueProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
};

export default SearchValueProvider;
