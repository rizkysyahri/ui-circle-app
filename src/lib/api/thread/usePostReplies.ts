import axiosInstance from "../../axios";

const useCreateThread = async (body: {
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

  return await axiosInstance.post(`/threads`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export default useCreateThread;
