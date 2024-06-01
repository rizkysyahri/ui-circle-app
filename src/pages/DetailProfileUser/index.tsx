import * as React from "react";
import DetailProfileUserPage from "../../components/DetailProfileUser/DetailProfileUserPage";
import { useAppDispatch } from "../../stores";
import { getThreadsAsync } from "../../stores/async/thread";
import { useParams } from "react-router-dom";
import axiosInstance from "../../lib/axios";
import { IProfileUser } from "../../types/types";

interface DetailProfileUserProps {}

const DetailProfileUser: React.FC<DetailProfileUserProps> = ({}) => {
  const { username } = useParams();
  const dispatch = useAppDispatch();

  const [usersProfile, setUsersProfile] = React.useState<IProfileUser>();

  const getUsersProfile = async () => {
    try {
      const res = await axiosInstance.get(`/profile/${username}`);

      setUsersProfile(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUsersProfile();
  }, []);

  React.useEffect(() => {
    dispatch(getThreadsAsync());
  }, []);

  return (
    <>
      {usersProfile && (
        <DetailProfileUserPage
          fullname={usersProfile.fullname || ""}
          username={usersProfile.username || ""}
          bio={usersProfile.profile?.bio || ""}
          avatar={usersProfile.profile?.avatar || ""}
          cover={usersProfile.profile?.cover || ""}
          follower={usersProfile.follower ? usersProfile.follower.length : 0}
          following={usersProfile.following ? usersProfile.following.length : 0}
        />
      )}
    </>
  );
};

export default DetailProfileUser;
