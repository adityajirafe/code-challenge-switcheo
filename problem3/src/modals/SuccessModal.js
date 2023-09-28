import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

function SuccessModal({ isOpen, clearHistory }) {
  const { onClose } = useDisclosure();
  const onClosing = () => {
    clearHistory();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Success</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Your transaction was successful!</ModalBody>
        <Button
          colorScheme="teal"
          my={4}
          onClick={onClosing}
          width={'30%'}
          alignSelf={'center'}
        >
          Close
        </Button>
      </ModalContent>
    </Modal>
  );
}

export default SuccessModal;
