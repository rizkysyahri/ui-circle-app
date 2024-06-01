import {
  Card,
  Flex,
  CardBody,
  Heading,
  Box,
  Avatar,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { IOtherUser } from "../types/types";
import axiosInstance from "../lib/axios";
import FollowButton from "./FollowButton";

interface SuggestionProps {}

const Suggestion: React.FC<SuggestionProps> = ({}) => {
  const [users, setUsers] = React.useState<IOtherUser[]>([]);

  const getOthersUsers = async () => {
    try {
      const resOthers = await axiosInstance.get("/other-users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUsers(resOthers.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getOthersUsers();
  }, []);

  return (
    <>
      <Flex mt={3}>
        <Card backgroundColor="#262626" textColor="white" h="auto" w="100%">
          <CardBody>
            <Heading fontSize="20px" lineHeight="28px">
              Suggested for you
            </Heading>
            {users.map((other) => (
              <Box mt={4} key={other.id}>
                <Flex gap={5} flexDir="column">
                  <Flex justifyContent="space-between">
                    <Flex>
                      <Avatar src={other?.avatar} mr={4} size="sm" />
                      <Flex flexDir="column">
                        <Text fontSize="14px" lineHeight="20px">
                          {other?.fullname}
                        </Text>
                        <Text
                          fontSize="14px"
                          lineHeight="16px"
                          textColor="#909090"
                        >
                          @{other?.username}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      <FollowButton userId={other.id as number} />
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Suggestion;
