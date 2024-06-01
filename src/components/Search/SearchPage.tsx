import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { UserSearch } from "lucide-react";
import * as React from "react";
import axiosInstance from "../../lib/axios";
import { IUserSearch } from "../../types/types";
import FollowButton from "../FollowButton";
import { Link } from "react-router-dom";

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = ({}) => {
  const [input, setInput] = React.useState("");
  const [users, setUsers] = React.useState<IUserSearch[]>([]);
  const [searchResult, setSearchResults] = React.useState<IUserSearch[]>([]);
  const _host_url = "http://localhost:7000/uploads/";

  const getUsers = async () => {
    try {
      const resUsers = await axiosInstance.get("/user");

      setUsers(resUsers.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (inputValue === "") {
      setSearchResults([]);
    } else {
      const filteredUsers = users.filter((user) =>
        user.fullname.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResults(filteredUsers);
    }
  };

  return (
    <Stack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <UserSearch />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search your friend"
          borderRadius="100px"
          borderColor="transparent"
          _hover={{ borderColor: "transparent" }}
          focusBorderColor="transparent"
          backgroundColor="#3F3F3F"
          onChange={handleInputChange}
        />
      </InputGroup>

      <Stack textColor="white" mt={3}>
        {searchResult.length > 0 ? (
          searchResult.map((result) => (
            <Box key={result.id} display="flex" justifyContent="space-between">
              <Link to={`/${result.username}`}>
                <Box display="flex" flexDir="row">
                  <Avatar src={result.profile?.avatar} mr={4} />
                  <Box display="flex" flexDir="column">
                    <Text>{result.fullname}</Text>
                    <Text textColor="#909090">@{result.username}</Text>
                    <Text mt={2}>{result.profile?.bio}</Text>
                  </Box>
                </Box>
              </Link>

              <FollowButton userId={result.id as number} />
            </Box>
          ))
        ) : (
          <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Text fontSize="20px">No results for “{input}”</Text>
            <Text width="400px" textAlign="center" textColor="#909090" mt={2}>
              Try searching for something else or check the spelling of what you
              typed.
            </Text>
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default SearchPage;
