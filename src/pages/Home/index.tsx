import ThreadCard from "../../components/ThreadCard";
import { Box, Heading } from "@chakra-ui/react";
import ModalInputThread from "../../components/ModalnputThread";
import { useAppDispatch, useAppSelector } from "../../stores";
import * as React from "react";
import { getThreadsAsync } from "../../stores/async/thread";

export default function Home() {
  const { thread } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getThreadsAsync());
  }, []);

  return (
    <Box>
      <Heading fontSize="24px" p="3%">
        Home
      </Heading>
      <ModalInputThread />

      {thread.threads.map((data) => (
        <ThreadCard key={data.id} thread={data} />
      ))}
    </Box>
  );
}
