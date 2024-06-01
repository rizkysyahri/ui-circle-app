import { Input, Button, FormControl } from "@chakra-ui/react";
import { FC } from "react";
import useSignUp from "../lib/api/auth/useSignUp";

interface InputSignUpProps {}

const InputSignUp: FC<InputSignUpProps> = ({}) => {
  const { handleChange, handleSubmitRegister } = useSignUp();
  return (
    <>
      <FormControl gap={3} display="flex" flexDir="column" minW="400px">
        <Input
          placeholder="Full Name*"
          _placeholder={{ color: "#B2B2B2" }}
          name="fullname"
          id="fullname"
          onChange={handleChange}
          type="text"
        />
        <Input
          placeholder="Username*"
          _placeholder={{ color: "#B2B2B2" }}
          name="username"
          id="username"
          onChange={handleChange}
          type="text"
        />
        <Input
          placeholder="Email*"
          _placeholder={{ color: "#B2B2B2" }}
          name="email"
          onChange={handleChange}
          id="email"
          type="email"
        />
        <Input
          placeholder="Password*"
          _placeholder={{ color: "#B2B2B2" }}
          name="password"
          id="password"
          onChange={handleChange}
          type="password"
        />

        <Button
          borderRadius="full"
          backgroundColor="#04A51E"
          textColor="white"
          fontWeight="bold"
          fontSize="20px"
          lineHeight="28px"
          onClick={handleSubmitRegister}
          _hover={{ bg: "#04A51E" }}
          mt={4}
        >
          Create
        </Button>
      </FormControl>
    </>
  );
};

export default InputSignUp;
