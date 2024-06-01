import * as React from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterAuth } from "../../../types/types";
import axiosInstance from "../../axios";

const useSignUp = () => {
  const navigate = useNavigate();
  const [formRegister, setIsRegister] = React.useState<IRegisterAuth>({
    email: "",
    username: "",
    fullname: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitRegister = async (): Promise<void> => {
    try {
      await axiosInstance.post("/register", formRegister);

      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleChange, handleSubmitRegister };
};

export default useSignUp;
