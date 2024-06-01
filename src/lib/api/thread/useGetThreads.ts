import * as React from "react";
import axiosInstance from "../../axios";
import { IThread } from "../../../types/types";

const useGetThreads = () => {
  const [threads, setThreads] = React.useState<IThread[] | []>([]);

  const fetchThreads = async () => {
    try {
      const responseThread = await axiosInstance.get("/threads");

      setThreads(responseThread.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchThreads();
  }, []);

  return { threads, fetchThreads };
};

export default useGetThreads;
