import { useAppDispatch } from "../../../stores";
import { getThreadByUserAsync } from "../../../stores/async/thread";
import axiosInstance from "../../axios";
import * as React from "react";

const useDeleteThread = (id: number) => {
  const dispatch = useAppDispatch();

  const deleteThread = async (id: number) => {
    try {
      const res = await axiosInstance.delete(`/thread/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(res);

      dispatch(getThreadByUserAsync(id));
    } catch (error) {
      console.log("error coy", error);
    }
  };

  const handleDelete = (id: number) => {
    console.log("id", id);
    deleteThread(id);
  };

  return { handleDelete };
};

export default useDeleteThread;
