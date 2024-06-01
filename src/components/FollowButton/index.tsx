import { Box, Button } from "@chakra-ui/react";
import * as React from "react";
import axiosInstance from "../../lib/axios";
import { getCurrentFollowingId } from "../../lib/call/follow";
import { useAppDispatch, useAppSelector } from "../../stores";
import { getProfileAsync } from "../../stores/async/auth";
import { getFollowingTokenAsync } from "../../stores/async/follow";

interface FollowButtonProps {
  userId: number;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
  const token = useAppSelector((state) => state.auth.token);
  const profile = useAppSelector((state) => state.auth.user);
  const [isFollowingState, setIsFollowingState] = React.useState(false);
  const dispatch = useAppDispatch();

  const getFollowing = async () => {
    try {
      const res = await axiosInstance.get(`/check-follow/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setIsFollowingState(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickButtonFollow = async () => {
    try {
      await axiosInstance.post(
        "/follow",
        {
          followingId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setIsFollowingState(!isFollowingState);

      await getFollowing();
      dispatch(getProfileAsync(token));
      dispatch(getFollowingTokenAsync(token));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getFollowing();
    dispatch(getFollowingTokenAsync(token));
  }, [userId]);

  return (
    <>
      <Button
        borderRadius="full"
        size="sm"
        backgroundColor={isFollowingState ? "#262626" : "#eff3f4"}
        textColor={isFollowingState ? "white" : "black"}
        _hover={isFollowingState ? { bg: "#262626" } : { bg: "#eff3f4" }}
        borderColor="white"
        borderWidth="1px"
        onClick={() => handleClickButtonFollow()}
      >
        {isFollowingState ? "Unfollow" : "Follow"}
      </Button>
    </>
  );
};

export default FollowButton;
