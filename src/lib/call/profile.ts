import axiosInstance from "../axios";

export const getProfile = async (token: string) => {
  return await axiosInstance.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

type Tbody = {
  [key: string]: string | File | null | undefined;
};

interface IBody extends Tbody {
  bio?: string | null;
  avatar?: File | null | string;
  cover?: File | null | string;
  username?: string | null;
  fullname?: string | null;
}

export const updateProfile = async (token: string, body: IBody) => {
  const formData = new FormData();

  Object.keys(body).map((key) => {
    if (body[key]) {
      formData.append(key, body[key] as Blob);
    }
  });

  return await axiosInstance.patch("/profiles", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
