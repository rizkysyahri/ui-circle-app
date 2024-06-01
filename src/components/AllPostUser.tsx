import * as React from "react";
import {
  Box,
  Avatar,
  Heading,
  Text,
  Icon,
  Grid,
  Image,
} from "@chakra-ui/react";
import { Icons } from "./Icons";

interface AllPostUserProps {
  username: string;
  postedAt: string;
  content: string;
  like: number;
  replies: number;
  
}

const AllPostUser: React.FC<AllPostUserProps> = ({
  username,
  postedAt,
  content,
  like,
  replies,
}) => {
  return (
    <Box borderBottomWidth={1} borderColor="#3F3F3F">
      <Box p="2%" display="flex" flexDir="row">
        <Avatar src="" height="40px" width="40px" mr={5} />
        <Box display="flex" flexDir="column" width="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Heading fontSize="14px">{username}</Heading>
              <Text textColor="#909090">@{username}</Text>
              <Text
                textColor="#909090"
                borderWidth={3}
                borderColor="#909090"
                borderRadius="full"
              ></Text>
              <Text textColor="#909090">{postedAt}</Text>
            </Box>
          </Box>
          <Text fontSize="14px">{content}</Text>

          {/* <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={2}>
            <Box>
              <Image src={image} width={500} borderRadius={10} height="100%" />
            </Box>
          </Grid> */}

          <Box display="flex" mt={3} flexDir="row">
            <Box display="flex" mr={6} cursor="pointer">
              <Icon as={Icons.heartIcon} w="24px" h="24px" mr={2} />
              <Text textColor="#909090">{like}</Text>
            </Box>
            <Box display="flex" cursor="pointer">
              <Icon as={Icons.messageIcon} w="24px" h="24px" mr={2} />
              <Text textColor="#909090">{replies} Replies</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AllPostUser;
