import { useContext } from "react";
import { SearchValueContext } from "../Context/SearchValueContext";

const useSearchValues = () => {
  const { searchValue, setSearchValue } = useContext(SearchValueContext);
  return { searchValue, setSearchValue };
};

export default useSearchValues;
