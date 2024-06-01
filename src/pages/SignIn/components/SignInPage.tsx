import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import InputSignIn from "../../../components/InputSignIn";
import { useNavigate } from "react-router-dom";

interface SignInPageProps {}

const SignInPage: FC<SignInPageProps> = ({}) => {
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
          Login to Circle
        </Text>

        <InputSignIn />

        <Box display="flex" gap={2} mt={5}>
          <Text>Don't have an account yet? </Text>
          <Text
            textColor="#04A51E"
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/auth/signup")}
          >
            Create account
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignInPage;
