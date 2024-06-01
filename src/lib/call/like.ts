import axiosInstance from "../axios";

export const createLike = async (threadId: number) => {
  return await axiosInstance.post(`/likes`, threadId, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getLikes = async (threadId: number) => {
  return await axiosInstance.get(`/like/${threadId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
