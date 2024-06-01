import { FC } from "react";
import ListItem from "./components/ListItem";
import { Box, Text } from "@chakra-ui/react";

interface SidebarPageProps {}

const SidebarPage: FC<SidebarPageProps> = ({}) => {
  return (
    <Box>
      <Text fontSize="2rem" fontWeight="bold" color="#04A51E" display={{base: "none", lg: "block"}}>
        CIRCLE
      </Text>

      <ListItem />
    </Box>
  );
};

export default SidebarPage;
