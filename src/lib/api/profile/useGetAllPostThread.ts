import * as React from "react";
import axiosInstance from "../../axios";
import { IThread } from "../../../types/types";

const useGetAllPostThread = (id: number) => {
  const [postThreads, setPostThreads] = React.useState<IThread[]>([]);

  const getAllPostThread = async () => {
    try {
      const threadResponse = await axiosInstance.get(`/threads/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setPostThreads(threadResponse.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    console.log(id)
    getAllPostThread();
  }, [id]);

  return { postThreads, getAllPostThread };
};

export default useGetAllPostThread;
