import * as React from "react";
import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import FollowButton from "../../FollowButton";
import { useAppSelector } from "../../../stores";

interface FollowersPageProps {}

const FollowersPage: React.FC<FollowersPageProps> = ({}) => {
  const following = useAppSelector((state) => state.follow);

  return (
    <>
      {following.following.map((data) => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          key={data.id}
        >
          <Box display="flex" my={4}>
            <Avatar src={data.profile?.avatar} mr={4} />
            <Flex flexDir="column">
              <Text textColor="white">{data.fullname}</Text>
              <Text textColor="#909090">@{data.username}</Text>
            </Flex>
          </Box>
          <Box>
            <FollowButton userId={data.id as number} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default FollowersPage;
