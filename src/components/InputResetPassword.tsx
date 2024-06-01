import { Box, Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import { FC } from "react";

interface InputResetPasswordProps {}

const InputResetPassword: FC<InputResetPasswordProps> = ({}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      textColor="white"
      alignItems="center"
    >
      <Flex flexDir="column">
        <Heading textColor="#04A51E" fontSize="36px" lineHeight="44px">
          Circle
        </Heading>
        <Text fontWeight="bold" fontSize="28px" lineHeight="36px" my={2}>
          Reset password
        </Text>

        <Box>
          <Input
            placeholder="New Password*"
            minW="400px"
            borderColor="#545454"
            focusBorderColor="transparent"
            _hover={{ borderColor: "#545454" }}
          />
        </Box>
        <Box my={3}>
          <Input
            placeholder="Confirm New Password*"
            minW="400px"
            focusBorderColor="transparent"
            _hover={{ borderColor: "#545454" }}
            borderColor="#545454"
          />
        </Box>

        <Button
          borderRadius="full"
          backgroundColor="#04A51E"
          textColor="white"
          fontWeight="bold"
          fontSize="20px"
          lineHeight="28px"
          _hover={{ bg: "#04A51E" }}
          mt={4}
        >
          Create New Password
        </Button>
      </Flex>
    </Box>
  );
};

export default InputResetPassword;
