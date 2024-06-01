import { Input, FormControl, Button, Text } from "@chakra-ui/react";
import * as React from "react";
import { loginAsync } from "../stores/async/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../stores";

interface InputSignInProps {}

const InputSignIn: React.FC<InputSignInProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = React.useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = (await dispatch(loginAsync(formLogin))).payload;

      console.log(token);
      navigate("/");
      //   console.log(resProfile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <FormControl gap={3} display="flex" flexDir="column" minW="400px">
        <Input
          placeholder="username*"
          id="username"
          type="username"
          name="username"
          value={formLogin.username}
          _placeholder={{ color: "#B2B2B2" }}
          onChange={(e) => {
            setFormLogin({ ...formLogin, username: e.target.value });
          }}
        />

        <Input
          placeholder="Password*"
          id="password"
          type="password"
          name="password"
          value={formLogin.password}
          _placeholder={{ color: "#B2B2B2" }}
          onChange={(e) => {
            setFormLogin({ ...formLogin, password: e.target.value });
          }}
        />

        <Text textAlign="end" cursor="pointer" onClick={() => navigate("/forgot-password")}>
          Forgot Password ?
        </Text>

        <Button
          borderRadius="full"
          backgroundColor="#04A51E"
          textColor="white"
          fontWeight="bold"
          fontSize="20px"
          lineHeight="28px"
          type="submit"
          _hover={{ bg: "#04A51E" }}
        >
          Login
        </Button>
      </FormControl>
    </form>
  );
};

export default InputSignIn;
