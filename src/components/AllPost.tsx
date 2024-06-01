import { FC, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Image,
} from "@chakra-ui/react";
import { Icons } from "./Icons";
import { Ellipsis, Trash2 } from "lucide-react";
import useDeleteThread from "../lib/api/thread/useDeleteThread";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../stores";
import { getThreadByUserAsync } from "../stores/async/thread";
import LikeButton from "./LikeButton";

interface AllPostProps {}

const AllPost: FC<AllPostProps> = ({}) => {
  const { id } = useParams();

  const { thread } = useAppSelector((state) => state);
  const profile = useAppSelector((state) => state.auth.user);
  const { handleDelete } = useDeleteThread(Number(id));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getThreadByUserAsync(Number(id)));
  }, []);

  return (
    <>
      {thread.threads.map((post: any) => (
        <Box borderBottomWidth={1} borderColor="#3F3F3F" key={post.id}>
          <Flex p="2%" flexDir="row">
            <Avatar src={profile?.avatar} height="40px" width="40px" mr={5} />
            <Flex flexDir="column" width="100%">
              <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center" gap={2}>
                  <Heading fontSize="14px">{post.author.username}</Heading>
                  <Text textColor="#909090">@{post.author.username}</Text>
                  <Text
                    textColor="#909090"
                    borderWidth={3}
                    borderColor="#909090"
                    borderRadius="full"
                  ></Text>
                  <Text textColor="#909090">{post.postedAt}</Text>
                </Flex>

                <Popover>
                  <PopoverTrigger>
                    <Ellipsis width={20} />
                  </PopoverTrigger>
                  <PopoverContent
                    backgroundColor="#262626"
                    border="transparent"
                  >
                    <PopoverBody>
                      <Button
                        colorScheme="blue"
                        width="100%"
                        textAlign="start"
                        justifyContent="start"
                        alignItems="center"
                        backgroundColor="#262626"
                        _hover={{ bg: "#1d1d1d" }}
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 width={20} color="red" />
                        <Text ml={2} textAlign="start" textColor="red">
                          Hapus
                        </Text>
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Text fontSize="14px">{post.content}</Text>

              <Box
                width="auto"
                display="flex"
                flexWrap={
                  post.ThreadImage && post.ThreadImage.length > 1
                    ? "wrap-reverse"
                    : "nowrap"
                }
                mt={3}
              >
                {post.ThreadImage &&
                  post.ThreadImage.map((image: any, index: number) => (
                    <Image
                      src={image.image}
                      borderRadius={
                        post.ThreadImage?.length === 1 ? "10px" : "5px"
                      }
                      height={post.ThreadImage?.length === 1 ? "auto" : "100%"}
                      width={post.ThreadImage?.length === 1 ? "100%" : "50%"}
                      objectFit={
                        post.ThreadImage?.length === 1 ? "contain" : "cover"
                      }
                      flex={1}
                      key={index}
                      mt={index > 0 ? 1 : 0}
                    />
                  ))}
              </Box>

              <Box display="flex" gap={2} mt="10px">
                <LikeButton threadId={post.id as number} />
                <Text textColor="#909090">{post._count.like}</Text>

                <Box display="flex" gap={1}>
                  <Link to={`/detail/${post.id}`}>
                    <Icons.messageIcon />
                  </Link>
                  <Text textColor="#909090">{post._count.replies} Replies</Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default AllPost;
