import { FC } from "react";
import {
  Box,
  Flex,
  Avatar,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Icons } from "./Icons";

interface InputRepliesDetailMediaProps {}

const InputRepliesDetailMedia: FC<InputRepliesDetailMediaProps> = ({}) => {
  return (
    <Flex
      p="2%"
      alignItems="center"
      borderBottomWidth="2px"
      borderColor="#3F3F3F"
    >
      <Box display="flex" flexDir="row" alignItems="center">
        <Avatar src="" height={10} width="auto" />
        <Flex ml={1}>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              placeholder="Type your reply!"
              fontWeight="normal"
              borderColor="transparent"
              focusBorderColor="transparent"
              _hover={{ borderColor: "transparent" }}
              width="full"
            />
            <InputRightElement
              width="4.5rem"
              gap="1rem"
              alignItems="center"
              display="flex"
            >
              <Box backgroundColor="transparent" mt={2}>
                <Icon as={Icons.imageIcon} w="24px" h="24px" />
              </Box>
              <Button
                borderRadius={100}
                py={3}
                px={10}
                textColor="#909090"
                bg="#005E0E"
                fontSize="14px"
                lineHeight="17px"
                _hover={{ bg: "#005E0E" }}
              >
                Replay
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </Flex>
  );
};

export default InputRepliesDetailMedia;
