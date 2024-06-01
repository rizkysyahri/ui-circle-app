import * as React from "react";
import axiosInstance from "../../axios";

const useGetFollow = (id: number) => {
  const [following, setFollowing] = React.useState<number>(0);

  const useGetFollowing = async () => {
    try {
      const resFollowing = await axiosInstance.get(`/followers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setFollowing(resFollowing.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    useGetFollowing();
  }, [id]);

  return { following, useGetFollowing };
};

export default useGetFollow;
