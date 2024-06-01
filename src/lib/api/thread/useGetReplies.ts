import * as React from "react";
import { IThread } from "../../../types/types";
import axiosInstance from "../../axios";

const useGetReplies = (id: number) => {
  const [repliesDetail, setRepliesDetails] = React.useState<IThread[]>([]);

  const useGetRepliesById = async (id: number) => {
    try {
      const res = await axiosInstance.get(`/replies/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setRepliesDetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    useGetRepliesById(id);
  }, [id]);

  return { repliesDetail, useGetRepliesById };
};

export default useGetReplies;
