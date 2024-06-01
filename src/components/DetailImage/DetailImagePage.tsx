import { Box, Image, Flex, Text, Icon, Avatar } from "@chakra-ui/react";
import * as React from "react";
import { IThread } from "../../types/types";
import { getReplies, getThreadById } from "../../lib/call/thread";
import { Link, useParams } from "react-router-dom";
import { Icons } from "../Icons";
import RepliesThread from "../../pages/DetailThread/components/RepliesThread";
import InputRepliesDetailMedia from "../InputRepliesDetailMedia";

interface DetailImagePageProps {}

const DetailImagePage: React.FC<DetailImagePageProps> = ({}) => {
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
  return (
    <>
      <Box display="flex">
        <Box
          alignItems="flex-start"
          justifyContent="flex-start"
          mr={5}
          overflow="hidden"
        >
          <Link to={`/profile/${threadDetail?.author?.id}`}>
            <Icon
              as={Icons.closeIcon}
              position="absolute"
              width={10}
              height={6}
              mt={2}
            />
          </Link>

          {threadDetail.ThreadImage &&
            threadDetail.ThreadImage.map((thread: any, index) => (
              <Image key={index} src={thread.image} h="100vh" w="3000px" />
            ))}
        </Box>

        <Box
          display="flex"
          flexDir="column"
          borderLeftWidth={2}
          borderColor="#3F3F3F"
          w="100%"
          overflow="auto"
        >
          <Flex p="2%" gap={3} borderBottomWidth={2} borderColor="#3F3F3F">
            <Avatar src="" height="40px" width="40px" />
            <Flex flexDir="column" gap={1}>
              <Flex gap={2} fontSize="14px" lineHeight="20px">
                <Text>{threadDetail.author?.username}</Text>
                <Text textColor="#909090">{threadDetail.author?.username}</Text>
                <Text
                  textColor="#909090"
                  borderWidth={3}
                  borderColor="#909090"
                  borderRadius="full"
                ></Text>
                <Text textColor="#909090">{threadDetail.postedAt}</Text>
              </Flex>

              <Flex textAlign="left" fontSize="14px" lineHeight="20px" my={1}>
                {threadDetail.content}
              </Flex>

              <Box display="flex" gap={5}>
                <Flex>
                  <Icon as={Icons.heart} w="24px" h="24px" mr={2} />
                  <Text textColor="#909090">24</Text>
                </Flex>
                <Flex>
                  <Icon as={Icons.messageIcon} w="24px" h="24px" mr={2} />
                  <Text textColor="#909090">34 Replies</Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
          <InputRepliesDetailMedia />

          {replies.map((reply) => (
            <RepliesThread thread={reply} key={reply.id} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default DetailImagePage;
