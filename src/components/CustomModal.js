import {
  Box,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";

const CustomModal = ({ children, label, isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx="4" py="0" my="0" maxH="md" overflowY="auto">
        <Box position="sticky" top="0" bg="white">
          <ModalHeader>{label}</ModalHeader>
          <Divider />
        </Box>
        <ModalBody px="2" my="0">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
