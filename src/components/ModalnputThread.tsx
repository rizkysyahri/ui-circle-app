import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  InputGroup,
  Input,
  Icon,
  Box,
  FormControl,
  Avatar,
  Image,
} from "@chakra-ui/react";
import * as React from "react";
import { Icons } from "./Icons";
import usePostThread from "../lib/api/thread/usePostThread";
import { createThread } from "../lib/call/thread";
import { getThreadsAsync } from "../stores/async/thread";
import { useAppDispatch, useAppSelector } from "../stores";

interface ModalInputThreadProps {
  threadId?: number;
  callback?: () => void;
}

const ModalInputThread: React.FC<ModalInputThreadProps> = ({
  threadId,
  callback,
}) => {
  const profile = useAppSelector((state) => state.auth.user);
  const [threadPost, setThreadPost] = React.useState<{
    content: string;
    image: FileList | null;
    threadId?: number;
  }>({ content: "", image: null });

  const { image } = usePostThread();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIconImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handlePostThread = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (threadId) {
        threadPost.threadId = threadId;
      }

      const res = await createThread(threadPost);

      console.log(res);

      if (callback) {
        await callback();
      } else {
        await dispatch(getThreadsAsync());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        mt={1}
        alignItems="center"
        borderBottomWidth={2}
        borderColor="#3F3F3F"
      >
        <Box display="flex" width="100%" p="2%" alignItems="center">
          <Avatar src={profile?.avatar} sx={{ marginRight: "18px" }} />
          <Input
            placeholder="What is happening?!"
            width="100%"
            borderColor="transparent"
            focusBorderColor="transparent"
            _hover={{ borderColor: "transparent" }}
            onClick={onOpen}
          />

          <Icons.imageIcon />
          <Box marginLeft="10px">
            <Button
              backgroundColor="#005E0E"
              borderRadius="100px"
              px={5}
              py={2}
              color="white"
              _hover={{ backgroundColor: "#005E0E" }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="#1D1D1D"
          p={2}
          maxW="600px"
          textColor="white"
        >
          <form onSubmit={handlePostThread}>
            <FormControl>
              <ModalCloseButton textColor="white" />
              <ModalBody borderBottomWidth={1} borderColor="#3F3F3F">
                <Flex mt={5} flexDir="row">
                  <Avatar
                    src={profile?.avatar}
                    height="40px"
                    width="40px"
                  />
                  <Flex ml={5} w="full" flexDir="column">
                    <InputGroup size="lg">
                      <Input
                        pr="4.5rem"
                        placeholder="What is happening?!"
                        borderColor="transparent"
                        focusBorderColor="transparent"
                        _hover={{ borderColor: "transparent" }}
                        width="full"
                        name="content"
                        onChange={(e) => {
                          setThreadPost({
                            ...threadPost,
                            content: e.target.value,
                          });
                        }}
                      />
                    </InputGroup>
                    {image && (
                      <Image
                        src={URL.createObjectURL(image)}
                        borderRadius={10}
                        mt={3}
                      />
                    )}
                  </Flex>
                </Flex>
              </ModalBody>

              <ModalFooter justifyContent="space-between">
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
                    multiple
                    max={4}
                    onChange={(e) => {
                      setThreadPost({ ...threadPost, image: e.target.files });
                    }}
                  />
                </Button>

                <Button
                  borderRadius={100}
                  px={9}
                  textColor="#909090"
                  bg="#005E0E"
                  _hover={{ bg: "#005E0E" }}
                  type="submit"
                  onClick={onClose}
                >
                  Post
                </Button>
              </ModalFooter>
            </FormControl>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalInputThread;
