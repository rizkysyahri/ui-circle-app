import {
  Box,
  Card,
  CardBody,
  Text,
  Avatar,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FC } from "react";

import { useAppSelector } from "../../stores";

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = ({}) => {
  const profile = useAppSelector((state) => state.auth.user);

  return (
    <Box sx={{ color: "white" }}>
      <Card backgroundColor="#262626" textColor="white" h="auto">
        <CardBody>
          <Flex flexDir="column">
            <Heading fontSize="20px" lineHeight="28px">
              My Profile
            </Heading>
            <Box mt={3}>
              <Image
                src={profile?.cover}
                position="relative"
                height="100px"
                objectFit="cover"
                borderRadius="10px"
                width="100%"
              />
              <Box marginTop={-12} marginLeft={6}>
                <Avatar
                  src={profile?.avatar}
                  w="80px"
                  h="80px"
                  borderWidth="4px"
                  borderColor="#262626"
                />
              </Box>
            </Box>

            <Text mt={2} fontSize="24px" lineHeight="32px">
              {profile?.user.fullname}
            </Text>
            <Text textColor="#909090" fontSize="14px" lineHeight="20px" mt={2}>
              @{profile?.user.username}
            </Text>
            <Text my={1}>{profile?.bio}</Text>

            <Flex gap={2} mt={2}>
              <Box display="flex" gap={2}>
                <Text>{profile?.user.following.length}</Text>
                <Text textColor="#909090">Followers</Text>
              </Box>
              <Box display="flex" gap={2}>
                <Text>{profile?.user.follower.length}</Text>
                <Text textColor="#909090">Following</Text>
              </Box>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProfileCard;
