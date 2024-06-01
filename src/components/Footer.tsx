import { Flex, Card, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <Flex mt={3}>
      <Card backgroundColor="#262626" textColor="white" h="auto" w="100%">
        <CardBody display="flex" flexDir="column">
          <Flex gap={2} alignItems="center" fontSize="14px">
            <Text>Developed by Syahri</Text>
            <Text
              textColor="#909090"
              borderWidth={3}
              borderColor="#909090"
              borderRadius="full"
            ></Text>

            {/* <Icons.github />
            <Icons.linkedin />
            <Icons.facebook />
            <Icons.instagram /> */}
          </Flex>
          <Flex mt={1} fontSize="11.5px" textColor="#909090">
            <Text display="flex" alignItems="center">
              Powered by <Text mx={1}>{/* <Icons.dumbwaysLogo /> */}</Text>
              DumbWays Indonesia{" "}
              <Text
                textColor="#909090"
                borderWidth={3}
                borderColor="#909090"
                borderRadius="full"
                mx={1}
              ></Text>
              #1 Coding Bootcamp
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Footer;
