import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

interface ModalNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalNotification: React.FC<ModalNotificationProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"#1d1d1d"}>
        <ModalHeader color={"black"}>Login Required</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"20px"}
          flexDir={"column"}
        >
          <Text>Balas untuk bergabung dengan percakapan.</Text>
          <Box width={"100%"} mt={3}>
            <Button colorScheme="blue" mr={3} onClick={onClose} width={"100%"}>
              Close
            </Button>
            <Button width={"100%"} mt={2}>Login</Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalNotification;
