import {
  Flex,
  Heading,
  Avatar,
  Stack,
  Box,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import * as React from "react";
import { Link } from "react-router-dom";
import AllPostUser from "../AllPostUser";
import MediaUser from "../MediaUser";
import axiosInstance from "../../lib/axios";
import { IProfileUser } from "../../types/types";
import FollowButton from "../FollowButton";

interface DetailProfileUserPageProps {
  fullname: string;
  username: string;
  bio: string;
  avatar: string;
  cover: string;
  follower: number;
  following: number;
}

const DetailProfileUserPage: React.FC<DetailProfileUserPageProps> = ({
  fullname,
  username,
  bio,
  cover,
  avatar,
  follower,
  following,
}) => {
  const [usersProfile, setUsersProfile] = React.useState<IProfileUser>();

  const getUsersProfile = async () => {
    try {
      const res = await axiosInstance.get(`/profile/${username}`);

      setUsersProfile(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUsersProfile();
  }, []);
  return (
    <Box
      display="flex"
      mt={3}
      p="2%"
      pb="0px"
      flexDir="column"
      borderBottomWidth="1px"
      borderColor="#3F3F3F"
    >
      <Box display="flex" alignItems="center" gap={3}>
        <Link to="/">
          <ArrowLeft />
        </Link>
        <Heading fontSize="2xl" textColor="#ffffff">
          {fullname}
        </Heading>
      </Box>

      <Stack mt={3} position="relative">
        <Image src={cover} height={140} objectFit="cover" borderRadius={10} />
        <Avatar
          src={avatar}
          w="80px"
          h="80px"
          position="absolute"
          top="97%"
          left="12%"
          transform="translate(-50%, -50%)"
          borderWidth="4px"
          borderColor="#1D1D1D"
          zIndex={1}
        />
      </Stack>

      <Stack alignItems="end">
        <FollowButton userId={usersProfile?.id as number} />
      </Stack>

      <Box mt={10}>
        <Text fontSize="24px" lineHeight="32px" fontWeight="bold">
          {fullname}
        </Text>
        <Text textColor="#909090" my={2}>
          @{username}
        </Text>
        <Text fontSize="16px" lineHeight="24px">
          {bio}
        </Text>
        <Flex fontSize="16px" lineHeight="24px" gap={3} mt={2}>
          <Flex>
            {following}
            <Text ml={2} textColor="#909090">
              Following
            </Text>
          </Flex>
          <Flex>
            {follower}
            <Text ml={2} textColor="#909090">
              Followers
            </Text>
          </Flex>
        </Flex>

        <Tabs>
          <TabList>
            <Tab width="50%"> All Post</Tab>
            <Tab width="50%"> Media</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                {usersProfile?.threads.map((thread) => (
                  <AllPostUser
                    username={thread.author?.username as string}
                    postedAt={thread.postedAt as string}
                    content={thread.content as string}
                    like={thread._count?.like as number}
                    replies={thread._count?.replies as number}
                    // image={thread.ThreadImage?.map((image) => (
                    //   <Image src={image} />
                    // ))}
                  />
                ))}
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <MediaUser />
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default DetailProfileUserPage;
