import { FC } from "react";
import { Icons } from "../../Icons";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SET_LOGOUT } from "../../../stores/slice/authSlice";
import { useAppDispatch, useAppSelector } from "../../../stores";

interface ListItemProps {}

const ListItem: FC<ListItemProps> = ({}) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(SET_LOGOUT());
  };

  return !auth.user ? (
    <Link to="auth">Login</Link>
  ) : (
    <Box
      width="100%"
      gap={3}
      height="600px"
      justifyContent="space-between"
      flexDir="column"
      display="flex"
    >
      <Flex flexDir="column">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            display="flex"
            gap={3}
            my={5}
            alignItems="center"
            _hover={{ backgroundColor: "#2D2D2D", borderRadius: "full" }}
            p={2}
          >
            <Icons.home style={{ width: "20px", height: "20px" }} />
            <Text display={{ base: "none", lg: "block" }}>Home</Text>
          </Box>
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <Box
            display="flex"
            gap={3}
            my={5}
            alignItems="center"
            _hover={{ backgroundColor: "#2D2D2D", borderRadius: "full" }}
            p={2}
          >
            <Icons.searchIcon style={{ width: "20px", height: "20px" }} />
            <Text display={{ base: "none", lg: "block" }}>Search</Text>
          </Box>
        </Link>

        <Link to="/follows" style={{ textDecoration: "none" }}>
          <Box
            display="flex"
            gap={3}
            my={5}
            alignItems="center"
            _hover={{ backgroundColor: "#2D2D2D", borderRadius: "full" }}
            p={2}
          >
            <Icons.heart style={{ width: "20px", height: "20px" }} />

            <Text display={{ base: "none", lg: "block" }}>Follows</Text>
          </Box>
        </Link>

        <Link
          to={`/profile/${auth.user.user.id}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            display="flex"
            gap={3}
            my={5}
            alignItems="center"
            _hover={{ backgroundColor: "#2D2D2D", borderRadius: "full" }}
            p={2}
          >
            <Icons.profileIcon style={{ width: "20px", height: "20px" }} />
            <Text display={{ base: "none", lg: "block" }}>Profile</Text>
          </Box>
        </Link>
      </Flex>

      <Box
        onClick={handleLogout}
        display="flex"
        gap={2}
        cursor="pointer"
        _hover={{ backgroundColor: "#2D2D2D", borderRadius: "full" }}
        p={2}
      >
        <Icon as={Icons.logoutIcon} fontSize="2xl" />
        <Text display={{ base: "none", lg: "block" }}>Logout</Text>
      </Box>
    </Box>
  );
};

export default ListItem;
