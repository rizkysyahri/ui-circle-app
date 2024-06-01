import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import InputSignUp from "../../InputSignUp";

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  const navigate = useNavigate();
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
          Create account Circle
        </Text>

        <InputSignUp />

        <Box display="flex" gap={2} mt={5}>
          <Text>Already have account?</Text>
          <Text
            textColor="#04A51E"
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/auth")}
          >
            Login
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUpPage;
