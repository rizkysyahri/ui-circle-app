import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import * as React from "react";
import FollowButton from "../../FollowButton";

interface FollowingPageProps {
  username: string;
  fullname: string;
  avatar: string;
  id: number;
}

const FollowingPage: React.FC<FollowingPageProps> = ({
  username,
  fullname,
  avatar,
  id,
}) => {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" my={4}>
          <Avatar src={avatar} mr={4} />
          <Flex flexDir="column">
            <Text textColor="white">{fullname}</Text>
            <Text textColor="#909090">@{username}</Text>
          </Flex>
        </Box>
        <Box>
          <FollowButton userId={id} />
        </Box>
      </Box>
    </>
  );
};

export default FollowingPage;
