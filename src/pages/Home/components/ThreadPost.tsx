import { FC } from "react";
import { Icons } from "../../../components/Icons";
import { Box, Avatar, Input, Button } from "@chakra-ui/react";

interface ThreadPostProps {}

const ThreadPost: FC<ThreadPostProps> = ({}) => {
  return (
    <Box mt={1} alignItems="center" borderBottomWidth={2} borderColor="#3F3F3F">
      <Box display="flex" width="100%" p="2%" alignItems="center">
        <Avatar
          src="https://i2.wp.com/nypost.com/wp-content/uploads/sites/2/2019/05/klay-thompson.jpg?quality=90&strip=all&ssl=1"
          sx={{ marginRight: "18px" }}
        />
        <Input
          placeholder="What is happening?!"
          width="100%"
          borderColor="transparent"
          focusBorderColor="transparent"
          _hover={{ borderColor: "transparent" }}
        />

        <Icons.imageIcon />
        <Box marginLeft="10px">
          <Button
            backgroundColor="#005E0E"
            borderRadius="100px"
            px={5}
            py={2}
            color="white"
            _hover={{ backgroundColor: "#005E0E" }}
          >
            Post
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ThreadPost;
