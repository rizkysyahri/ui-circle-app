import { Box, Icon } from "@chakra-ui/react";
import * as React from "react";
import { Icons } from "../Icons";
import { useAppDispatch } from "../../stores";
import axiosInstance from "../../lib/axios";
import { getLikes } from "../../lib/call/like";
import { getThreadsAsync } from "../../stores/async/thread";

interface LikeButtonProps {
  threadId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ threadId }) => {
  const [liked, setLiked] = React.useState(false);
  const dispatch = useAppDispatch();

  const getLike = async () => {
    try {
      const res = await getLikes(threadId);
      setLiked(res.data.data.like === null ? false : true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCLickLike = async () => {
    try {
      await axiosInstance.post(
        "/likes",
        { threadId: threadId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      await getLike();
      dispatch(getThreadsAsync());
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getLike();
  }, []);

  return (
    <Box display="flex" gap={1}>
      <Icon
        width="24px"
        height="24px"
        as={liked ? Icons.heartIcon : Icons.heart}
        onClick={() => handleCLickLike()}
      />
    </Box>
  );
};

export default LikeButton;
