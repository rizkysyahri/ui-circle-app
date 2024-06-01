import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Image,
  Avatar,
  Box,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { Icons } from "./Icons";
import { useAppDispatch, useAppSelector } from "../stores";
import { updateProfile } from "../lib/call/profile";
import { getProfileAsync } from "../stores/async/auth";

interface ModalEditProfileProps {}

const ModalEditProfile: React.FC<ModalEditProfileProps> = ({}) => {
  const profile = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const inputRefAvatar = React.useRef<HTMLInputElement>(null);
  const inputRefCover = React.useRef<HTMLInputElement>(null);
  const [isImageAvatar, setIsImageAvatar] = React.useState<
    string | undefined
  >();
  const [isImageCover, setIsImageCover] = React.useState<string | undefined>();

  const [formProfile, setFormProfile] = React.useState<{
    bio?: string;
    avatar?: File | null | string;
    cover?: File | null | string;
    username?: string;
    fullname?: string;
  }>({
    bio: profile?.bio || "",
    avatar: null,
    cover: null,
    username: profile?.user.username || "",
    fullname: profile?.user.fullname || "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIconAvatarClick = () => {
    if (inputRefAvatar.current) {
      inputRefAvatar.current.click();
    }
  };

  const handleIconCoverClick = () => {
    if (inputRefCover.current) {
      inputRefCover.current.click();
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      await updateProfile(token, formProfile);
      setFormProfile(formProfile);

      await dispatch(getProfileAsync(token));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImgAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setIsImageAvatar(imageUrl);

      setFormProfile({
        ...formProfile,
        avatar: file || profile?.avatar || null,
      });
    }
  };

  const handleChangeImgCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setIsImageCover(imageUrl);

      setFormProfile({
        ...formProfile,
        cover: file || profile?.cover || null,
      });
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormProfile({
      ...formProfile,
      [name]: value,
    });
  };

  const _host_url = "http://localhost:7000/uploads/";

  return (
    <>
      <Button
        borderRadius="full"
        fontSize="14px"
        lineHeight="20px"
        backgroundColor="transparent"
        borderColor="white"
        borderWidth="1px"
        px={5}
        py={2}
        _hover={{ bg: "transparent" }}
        textColor="white"
        onClick={onOpen}
      >
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#1D1D1D" textColor="white" minW="540px">
          <ModalHeader textColor="#FFFFFF">Edit Profile</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleUpdate}>
            <ModalBody display="flex" flexDir="column" mt={0}>
              <Stack>
                <Image
                  src={_host_url + isImageCover ? isImageCover : profile?.cover}
                  h="100px"
                  borderRadius={10}
                  objectFit="cover"
                />
                <Box
                  backgroundColor="#323232"
                  position="absolute"
                  borderRadius="100%"
                  w="30px"
                  h="30px"
                  top="10%"
                  left="9%"
                  zIndex={1}
                  display="flex"
                  alignItems="center"
                  onClick={handleIconCoverClick}
                  justifyContent="center"
                  cursor="pointer"
                >
                  <Icon as={Icons.iconImageProfile} w="20px" h="20px" />
                  <Input
                    type="file"
                    display="none"
                    name="image"
                    onChange={handleChangeImgCover}
                    ref={inputRefCover}
                  />
                </Box>
              </Stack>

              <Stack position="relative">
                <Avatar
                  src={
                    _host_url + isImageAvatar ? isImageAvatar : profile?.avatar
                  }
                  w="80px"
                  h="80px"
                  position="absolute"
                  top="90%"
                  left="12%"
                  transform="translate(-50%, -50%)"
                  borderWidth="4px"
                  borderColor="#1D1D1D"
                  name="avatar"
                  zIndex={1}
                />

                <Box
                  backgroundColor="#323232"
                  position="absolute"
                  borderRadius="100%"
                  w="30px"
                  h="30px"
                  left="9%"
                  top={-4}
                  zIndex={1}
                  display="flex"
                  alignItems="center"
                  onClick={handleIconAvatarClick}
                  justifyContent="center"
                  cursor="pointer"
                >
                  <Icon as={Icons.iconImageProfile} w="20px" h="20px" />
                  <Input
                    type="file"
                    display="none"
                    onChange={handleChangeImgAvatar}
                    name="image"
                    ref={inputRefAvatar}
                  />
                </Box>
              </Stack>

              <Stack mt={14}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    width="100%"
                    placeholder="Name"
                    borderColor="#545454"
                    focusBorderColor="#545454"
                    // value={profile?.user.fullname.valueOf}
                    name="fullname"
                    onChange={handleChange}
                    _hover={{ borderColor: "#545454" }}
                  />
                  <Box my={2}>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      width="100%"
                      placeholder="Username"
                      borderColor="#545454"
                      focusBorderColor="#545454"
                      //   value={profile?.user.username}
                      name="username"
                      onChange={handleChange}
                      _hover={{ borderColor: "#545454" }}
                    />
                  </Box>
                  <FormLabel>Bio</FormLabel>
                  <Textarea
                    width="100%"
                    placeholder="Bio"
                    borderColor="#545454"
                    focusBorderColor="#545454"
                    name="bio"
                    // value={profile?.bio}
                    onChange={handleChange}
                    _hover={{ borderColor: "#545454" }}
                  />
                </FormControl>
              </Stack>
            </ModalBody>

            <Box
              w="100%"
              h="0.5"
              bg="gray.200"
              borderWidth="1px"
              borderColor="#3F3F3F"
              borderRadius="md"
              opacity={1}
            />

            <ModalFooter>
              <Button
                variant="solid"
                backgroundColor="#04A51E"
                textColor="white"
                borderRadius="full"
                _hover={{ bg: "#04A51E" }}
                onClick={onClose}
                type="submit"
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditProfile;
