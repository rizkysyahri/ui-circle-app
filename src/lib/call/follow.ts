import axiosInstance from "../axios";

export const createFollow = async (followingId: number) => {
  return await axiosInstance.post("/follow", followingId, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getFollowers = async (followingId: number) => {
  return await axiosInstance.get(`/followers/${followingId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getCurrentFollowingId = async (followingId: number) => {
  return await axiosInstance.get(`/follower/${followingId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getFollowersByToken = async () => {
  return await axiosInstance.get("/followers", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getFollowingByToken = async (token: string) => {
  return await axiosInstance.get("/followings", {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
};
