import React, { useState } from 'react';
import { Image, HStack, useColorMode, Text } from '@chakra-ui/react';
import CoinSelectModal from '../modals/CoinSelectModal';
import dropdown from '../assets/dropdown.svg';
import { CRYPTOCURRENCIES, getCryptoImage } from '../constants/CryptoList';

function DropdownPicker({ state, formData, setFormData }) {
  const { colorMode } = useColorMode();

  const handleDropdown = () => {
    openModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HStack
      width="200px" // Set a fixed width for the HStack
      overflow="hidden" // Hide overflow content
      bgColor={colorMode === 'light' ? 'white' : 'teal.700'}
      padding={1}
      justifyContent="space-between"
      alignSelf="center"
      borderRadius="full"
    >
      {getCryptoImage(
        state === 'SELL' ? formData.sellCurrency : formData.buyCurrency
      )}
      <Text
        colorScheme="current"
        justifySelf={'flex-start'}
        fontWeight={'semibold'}
      >
        {state === 'SELL'
          ? formData.sellCurrency.substring(0, 4)
          : formData.buyCurrency.substring(0, 4)}
      </Text>
      <Image
        src={dropdown}
        h="25px"
        justifySelf={'flex-end'}
        cursor="pointer"
        transition="opacity 0.3s"
        _hover={{ opacity: 0.2 }}
        onClick={() => handleDropdown()}
      />
      <CoinSelectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        cryptocurrencies={CRYPTOCURRENCIES}
        state={state}
        formData={formData}
        setFormData={setFormData}
      />
    </HStack>
  );
}

export default DropdownPicker;
