import * as React from "react";
import SearchPage from "../../components/Search/SearchPage";
import { Box } from "@chakra-ui/react";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Box p="2%">
      <SearchPage />
    </Box>
  );
};

export default Search;
