import { Box, Grid, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import useGetAllPostThread from "../lib/api/profile/useGetAllPostThread";

interface MediaProps {}

const Media: FC<MediaProps> = ({}) => {
  const { id } = useParams();
  const { postThreads } = useGetAllPostThread(Number(id));

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {postThreads.map((thread) => (
        <Link to={`/media/${thread.id}`} key={thread.id}>
          <Box>
            {thread.ThreadImage &&
              thread.ThreadImage.map((images: any, index) => (
                <Box key={index}>
                  <Image src={images.image} borderRadius={10} />
                </Box>
              ))}
          </Box>
        </Link>
      ))}
    </Grid>
  );
};

export default Media;
