import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
} from '@chakra-ui/react';

function FeaturePendingModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Feature Pending</ModalBody>
        <Button
          colorScheme="teal"
          my={4}
          onClick={onClose}
          width={'30%'}
          alignSelf={'center'}
        >
          Close
        </Button>
      </ModalContent>
    </Modal>
  );
}

export default FeaturePendingModal;
