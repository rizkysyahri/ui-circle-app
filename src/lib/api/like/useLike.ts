import * as React from "react";
import axiosInstance from "../../axios";

const useLike = (threadId: number) => {
  const [like, setLike] = React.useState<number>(0);
  const [totalLike, setTotalLike] = React.useState<number>(0);

  const useLike = async () => {
    try {
      const res = await axiosInstance.get(`/like/${threadId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setTotalLike(res.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    useLike();
  }, []);

  return { useLike };
};

export default useLike;
