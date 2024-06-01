import {
  Box,
  Avatar,
  Flex,
  InputGroup,
  InputRightElement,
  Icon,
  Button,
  Input,
} from "@chakra-ui/react";
import * as React from "react";
import { Icons } from "./Icons";
import { createThread } from "../lib/call/thread";
import { useAppSelector } from "../stores";

interface InputRepliesProps {
  threadId?: number;
  callback?: () => void;
}

const InputReplies: React.FC<InputRepliesProps> = ({ threadId, callback }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const profile = useAppSelector((state) => state.auth.user);

  const [threadPost, setThreadPost] = React.useState<{
    content: string;
    image: FileList | null;
    threadId?: number;
  }>({ content: "", image: null });

  const handlePostThread = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();

      if (threadId) {
        threadPost.threadId = threadId;
      }

      const res = await createThread(threadPost);

      console.log(res);

      if (callback) {
        await callback();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleIconImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Box
      display="flex"
      p="2%"
      alignItems="center"
      borderBottomWidth="2px"
      borderColor="#3F3F3F"
    >
      <Box display="flex" flexDir="row" alignItems="center">
        <Avatar src={profile?.avatar} height={10} width={10} />
        <Flex ml={1}>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              placeholder="Type your reply!"
              fontWeight="normal"
              borderColor="transparent"
              focusBorderColor="transparent"
              _hover={{ borderColor: "transparent" }}
              width="525px"
              onChange={(e) =>
                setThreadPost({ ...threadPost, content: e.target.value })
              }
            />
            <InputRightElement
              width="4.5rem"
              gap="1rem"
              alignItems="center"
              display="flex"
            >
              <Button
                backgroundColor="transparent"
                _hover={{ bg: "#1D1D1D" }}
                onClick={handleIconImageClick}
              >
                <Icon as={Icons.imageIcon} w="24px" h="24px" />
                <Input
                  type="file"
                  display="none"
                  ref={inputRef}
                  name="image"
                  onChange={(e) =>
                    setThreadPost({ ...threadPost, image: e.target.files })
                  }
                />
              </Button>
              <Button
                borderRadius={100}
                py={3}
                px={10}
                textColor="#909090"
                bg="#005E0E"
                fontSize="14px"
                lineHeight="17px"
                _hover={{ bg: "#005E0E" }}
                onClick={handlePostThread}
              >
                Replay
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </Box>
  );
};

export default InputReplies;
