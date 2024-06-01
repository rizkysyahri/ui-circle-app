import { Box, Flex, Heading, Input, Text, Button } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = ({}) => {
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
          Forgot password
        </Text>

        <Input placeholder="Email*" minW="400px" />

        <Button
          borderRadius="full"
          backgroundColor="#04A51E"
          textColor="white"
          fontWeight="bold"
          fontSize="20px"
          lineHeight="28px"
          _hover={{ bg: "#04A51E" }}
          onClick={() => navigate("/reset-password/:token")}
          mt={4}
        >
          Send Intruction
        </Button>

        <Text display="flex" gap={2} mt={5}>
          Already have account?{" "}
          <Text
            textColor="#04A51E"
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/auth")}
          >
            Login
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
