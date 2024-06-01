// import axiosInstance from "../../axios";

// const useCreateThread = async (body: {
//   content: string;
//   image: FileList | null;
//   threadId?: number;
// }) => {
//   const formData = new FormData();

//   if (body.image !== null) {
//     for (let i = 0; i < body.image.length; i++) {
//       formData.append("image", body.image[i]);
//     }
//     // formData.append("image", body.image);
//   }

//   if (body.threadId) {
//     formData.append("threadId", body.threadId.toString());
//   }

//   formData.append("content", body.content);

//   return await axiosInstance.post("/threads", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });

// //   const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("content", form.content);
// //     if (image !== null) {
// //       formData.append("image", form.image as string);
// //     }

// //     mutateAsync(formData);
// //   };
// };

// export default useCreateThread;

import * as React from "react";

const usePostThread = () => {
  const [threadPost, setThreadPost] = React.useState<{
    content: string;
    image: FileList | null;
    threadId?: number;
  }>({
    content: "",
    image: null,
  });
  const [image, setImage] = React.useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = e.target;

    if (files && files?.length > 0) {
      setThreadPost({
        ...threadPost,
        [name]: files[0],
      });
      setImage(files[0]);
    } else {
      setThreadPost({
        ...threadPost,
        [name]: value,
      });
      setImage(null);
    }
  };

  return { handleChange, image };
};

export default usePostThread;
