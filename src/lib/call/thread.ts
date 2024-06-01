import axiosInstance from "../axios";

export const createThread = async (body: {
  content: string;
  image: FileList | null;
  threadId?: number;
}) => {
  const formData = new FormData();

  if (body.image !== null) {
    for (let i = 0; i < body.image.length; i++) {
      formData.append("image", body.image[i]);
    }
    // formData.append("image", body.image);
  }

  if (body.threadId) {
    formData.append("threadId", body.threadId.toString());
  }

  formData.append("content", body.content);

  return await axiosInstance.post("/threads", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getThreadById = async (id: number) => {
  return await axiosInstance.get(`/threads/${id}`);
};

export const getReplies = async (id: number) => {
  return await axiosInstance.get(`/replies/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getThreads = async () => {
  return await axiosInstance.get("/threads");
};

export const getThreadsByToken = async (threadId: number) => {
  return await axiosInstance.get(`/threads/users/${threadId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const deleteThread = async (threadId: number) => {
  return await axiosInstance.delete(`/thread/${threadId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
