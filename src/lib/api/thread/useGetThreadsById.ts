import { IThread } from "../../../types/types";
import axiosInstance from "../../axios";
import * as React from "react";

const useGetThreadById = (id: number) => {
  const [threadsDetails, setThreadsDetails] = React.useState<IThread>({
    userId: 0,
    content: "",
    ThreadImage: [],
    id: 0,
  });

  const getThreadsById = async () => {
    try {
      const responseThread = await axiosInstance.get(`/threads/${id}`);

      setThreadsDetails(responseThread.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getThreadsById();
  }, [id]);

  return { threadsDetails };
};

export default useGetThreadById;
