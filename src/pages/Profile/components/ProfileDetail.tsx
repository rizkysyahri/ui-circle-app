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
import { FC } from "react";
import { Link } from "react-router-dom";
import AllPost from "../../../components/AllPost";
import Media from "../../../components/Media";
import { useAppSelector } from "../../../stores";
import ModalEditProfile from "../../../components/ModalEditProfile";

interface ProfileDetailProps {}

const ProfileDetail: FC<ProfileDetailProps> = ({}) => {
  const profile = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Flex
        mt={3}
        p="2%"
        pb="0px"
        flexDir="column"
        borderBottomWidth="1px"
        borderColor="#3F3F3F"
      >
        <Flex alignItems="center" gap={3}>
          <Link to="/">
            <ArrowLeft />
          </Link>
          <Heading fontSize="2xl" textColor="#ffffff">
            {profile?.user.fullname}
          </Heading>
        </Flex>

        <Stack mt={3} position="relative">
          <Image
            src={profile?.cover}
            height={140}
            objectFit="cover"
            borderRadius={10}
          />
          <Avatar
            src={profile?.avatar}
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

        <Stack alignItems="end" mt={4}>
          <ModalEditProfile />
        </Stack>

        <Box mt={10}>
          <Text fontSize="24px" lineHeight="32px" fontWeight="bold">
            {profile?.user.fullname}
          </Text>
          <Text textColor="#909090" my={2}>
            @{profile?.user.username}
          </Text>
          <Text fontSize="16px" lineHeight="24px">
            {profile?.bio}
          </Text>
          <Flex fontSize="16px" lineHeight="24px" gap={3} mt={2}>
            <Flex>
              {profile?.user.following.length}
              <Text ml={2} textColor="#909090">
                Followers
              </Text>
            </Flex>
            <Flex>
              {profile?.user.following && (
                <>
                  {profile?.user.follower.length}
                  <Text ml={2} textColor="#909090">
                    Following
                  </Text>
                </>
              )}
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
                  <AllPost />
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  <Media />
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default ProfileDetail;
