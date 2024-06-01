import {
  Box,
  Heading,
  Avatar,
  Text,
  Image,
  Grid,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";
import InputReplies from "../../components/InputReplies";
import RepliesThread from "./components/RepliesThread";
import { Link, useParams } from "react-router-dom";
import { getReplies, getThreadById } from "../../lib/call/thread";
import { IThread } from "../../types/types";
import { ArrowLeft } from "lucide-react";
import { Icons } from "../../components/Icons";
import LikeButton from "../../components/LikeButton";
import { formatDate, formatTime } from "../../lib/format";
import { useAppSelector } from "../../stores";

interface DetailPageProps {}

const DetailPage: React.FC<DetailPageProps> = ({}) => {
  const { threadId } = useParams();

  const [threadDetail, setThreadDetail] = React.useState<IThread>({
    userId: 0,
    content: "",
    ThreadImage: [],
    id: 0,
  });
  const [replies, setReplies] = React.useState<IThread[]>([]);

  const fetchThreadDetail = async () => {
    try {
      const res = await getThreadById(Number(threadId));
      const resReplies = await getReplies(Number(threadId));

      setThreadDetail(res.data.data);

      setReplies(resReplies.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchThreadDetail();
  }, [threadId]);

  const formattedDate = formatDate(
    new Date(threadDetail?.postedAt as string),
    "MMM dd, yyyy"
  );
  const formattedTime = formatTime(new Date(threadDetail?.postedAt as string));

  return (
    <>
      <Box p="2%" mt={3}>
        <Flex alignItems="center" gap={2}>
          <Link to="/">
            <ArrowLeft />
          </Link>
          <Heading fontSize="2xl" textColor="#ffffff">
            Status
          </Heading>
        </Flex>

        <Box mt={6}>
          <Flex>
            <Avatar
              src={threadDetail.author?.profile.avatar}
              height={10}
              width={10}
              mr={4}
            />
            <Flex flexDir="column">
              <Text fontWeight="semibold" fontSize="14px" lineHeight="20px">
                {threadDetail.author?.username}
              </Text>
              <Text textColor="#909090" fontSize="14px" lineHeight="20px">
                {threadDetail.author?.email}
              </Text>
            </Flex>
          </Flex>

          <Flex flexDir="column">
            <Text fontSize="14px" lineHeight="20px" my={4} fontWeight="normal">
              {threadDetail.content}
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {threadDetail.ThreadImage &&
                threadDetail.ThreadImage.map((thread: any, index) => (
                  <Image
                    key={index}
                    src={thread.image}
                    borderRadius={10}
                    height="100%"
                  />
                ))}
            </Grid>

            <Flex
              textColor="#909090"
              fontSize="14px"
              lineHeight="20px"
              fontWeight="normal"
              mt={2}
              gap={2}
              alignItems="center"
            >
              <Text>{formattedTime}</Text>
              <Text
                textColor="#909090"
                borderWidth={3}
                borderColor="#909090"
                borderRadius="full"
              ></Text>
              <Text>{formattedDate}</Text>
            </Flex>

            <Box display="flex" gap={2} mt="10px">
              <LikeButton threadId={threadDetail.id as number} />
              <Text color="#909090">{threadDetail._count?.like}</Text>

              <Box display="flex" gap={1}>
                <Icons.messageIcon />
                <Text color="#909090">{threadDetail._count?.replies}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        h="0.5"
        bg="gray.200"
        borderWidth="1px"
        borderColor="#3F3F3F"
        borderRadius="md"
        opacity={1}
      />
      <InputReplies callback={fetchThreadDetail} threadId={Number(threadId)} />

      {replies.map((reply) => (
        <RepliesThread thread={reply} key={reply.id} />
      ))}
    </>
  );
};

export default DetailPage;
