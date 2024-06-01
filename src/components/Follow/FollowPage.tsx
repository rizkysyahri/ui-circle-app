import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import * as React from "react";
import FollowingPage from "./components/FollowingPage";
import FollowersPage from "./components/FollowersPage";
import { getFollowersByToken } from "../../lib/call/follow";
import { IFollowersUser } from "../../types/types";
import { useAppDispatch } from "../../stores";
import { getFollowingTokenAsync } from "../../stores/async/follow";

interface FollowPageProps {
  token?: string;
}

const FollowPage: React.FC<FollowPageProps> = ({ token }) => {
  const [followers, setFollowers] = React.useState<IFollowersUser[]>([]);
  const dispatch = useAppDispatch();
  const _host_url = "http://localhost:7000/uploads/";

  const getFollowersByTokenUserID = async () => {
    try {
      const res = await getFollowersByToken();

      setFollowers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getFollowersByTokenUserID();
    dispatch(getFollowingTokenAsync(token as string));
  }, []);

  return (
    <Box p="2%">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Followers</Tab>
          <Tab>Following</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              {followers?.map((follower) => (
                <FollowingPage
                  username={follower?.username}
                  fullname={follower?.fullname}
                  avatar={_host_url + follower.profile?.avatar}
                  id={follower.id}
                />
              ))}
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <FollowersPage />
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FollowPage;
