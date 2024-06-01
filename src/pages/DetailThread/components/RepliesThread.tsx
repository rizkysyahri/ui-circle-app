import {
  Box,
  Avatar,
  Flex,
  Heading,
  Popover,
  PopoverContent,
  Text,
  PopoverBody,
  Button,
  Icon,
  Grid,
  Image,
} from "@chakra-ui/react";
import { FC } from "react";
import { Icons } from "../../../components/Icons";
import { IThread } from "../../../types/types";
import LikeButton from "../../../components/LikeButton";

interface RepliesThreadProps {
  thread: IThread;
}

const RepliesThread: FC<RepliesThreadProps> = ({ thread }) => {
  return (
    <>
      <Box p="2%" display="flex" borderBottomWidth="2px" borderColor="#3F3F3F">
        <Avatar src={thread.author?.profile.avatar} height="40px" width="40px" mr={5} />
        <Flex flexDir="column" width="100%">
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" gap={2}>
              <Heading fontSize="14px" fontWeight="semibold">
                {thread.author?.username}
              </Heading>
              <Text textColor="#909090" fontSize="14px" lineHeight="16px">
                {thread.author?.email}
              </Text>
              <Text
                textColor="#909090"
                borderWidth={3}
                borderColor="#909090"
                borderRadius="full"
              ></Text>
              <Text textColor="#909090">{thread.postedAt}</Text>
            </Flex>

            <Popover>
              <PopoverContent backgroundColor="#262626" border="transparent">
                <PopoverBody>
                  <Button
                    colorScheme="blue"
                    width="100%"
                    textAlign="start"
                    justifyContent="start"
                    alignItems="center"
                    backgroundColor="#262626"
                    _hover={{ bg: "#1d1d1d" }}
                  >
                    {/* <Trash2 width={20} color="red" /> */}
                    <Text ml={2} textAlign="start" textColor="red">
                      Hapus
                    </Text>
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <Text
            fontSize="14px"
            lineHeight="20px"
            fontWeight="normal"
            mt={2}
            textColor="#FFFFFF"
          >
            {thread.content}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={3}>
            {thread.ThreadImage &&
              thread.ThreadImage.map((images: any, index) => (
                <Box key={index}>
                  <Image
                    src={"http://localhost:7000/uploads/" + images.image}
                    borderRadius="10px"
                    height="100%"
                  />
                </Box>
              ))}
          </Grid>

          <Box display="flex" gap={2} mt="10px">
            <LikeButton threadId={thread.id as number} />
            <Text color="#909090">{thread._count?.like}</Text>

            <Box display="flex" gap={1}>
              <Icons.messageIcon />
              <Text color="#909090">{thread._count?.replies}</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default RepliesThread;
