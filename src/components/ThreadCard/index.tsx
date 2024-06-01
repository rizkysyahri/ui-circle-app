import * as React from "react";
import { Icons } from "../Icons";
import { IThread } from "../../types/types";
import { Avatar, Box, Text, Image, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import { useAppSelector } from "../../stores";
import ModalNotification from "../ModalNotification";

interface ThreadCard {
  thread: IThread;
}

const ThreadCard: React.FC<ThreadCard> = ({ thread }) => {
  const auth = useAppSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClickNotification = (e: React.MouseEvent) => {
    if (!auth.user) {
      e.preventDefault();
      onOpen();
    }
  };


  return (
    <Box display="flex" p="2%" borderBottomWidth={2} borderColor="#3F3F3F">
      <Avatar
        src={thread.author?.profile?.avatar}
        sx={{ marginRight: "18px" }}
      />
      <Box display="flex" flexDirection="column">
        <Link to={`/${thread.author?.username}`}>
          <Box display="flex" gap={2} alignItems="center">
            <Text
              fontSize="14px"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
            >
              {thread.author?.username}
            </Text>
            <Text color="#909090">@{thread.author?.username}</Text>
            <Text
              textColor="#909090"
              borderWidth={3}
              borderColor="#909090"
              borderRadius="full"
            ></Text>
            <Text color="#909090">{thread.postedAt}</Text>
          </Box>
        </Link>

        <Text fontSize="14px" mt="10px">
          {thread.content}
        </Text>

          <Box
            width="auto"
            display="flex"
            flexWrap={
              thread.ThreadImage && thread.ThreadImage.length > 1
                ? "wrap-reverse"
                : "nowrap"
            }
            mt={3}
          >
            {thread.ThreadImage &&
              thread.ThreadImage.map((image: any, index: number) => (
                <Image
                  src={image.image}
                  borderRadius={
                    thread.ThreadImage?.length === 1 ? "10px" : "5px"
                  }
                  height={thread.ThreadImage?.length === 1 ? "auto" : "100%"}
                  width={thread.ThreadImage?.length === 1 ? "100%" : "50%"}
                  objectFit={
                    thread.ThreadImage?.length === 1 ? "contain" : "cover"
                  }
                  flex={1}
                  key={index}
                  mt={index > 0 ? 2 : 0}
                />
              ))}
          </Box>

        <Box display="flex" gap={2} mt="10px">
          <LikeButton threadId={thread.id as number} />
          <Text color="#909090">{thread._count?.like}</Text>

          <Box display="flex" gap={1}>
            <Link to={`/detail/${thread.id}`} onClick={handleClickNotification}>
              <Icons.messageIcon />
            </Link>
            <Text color="#909090">{thread._count?.replies} Replies</Text>
          </Box>
        </Box>
        <ModalNotification isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
};

export default ThreadCard;
