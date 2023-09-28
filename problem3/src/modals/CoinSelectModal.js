import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  VStack,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';
import fetchPrices from '../network/NetworkManager';
import { getCryptoImage } from '../constants/CryptoList';

const CoinSelectModal = ({
  isOpen,
  onClose,
  cryptocurrencies,
  state,
  formData,
  setFormData,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const FEES = 0.4;

  const filteredCryptos = cryptocurrencies.filter(crypto =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function updateSellSide() {
      const prices = await fetchPrices();
      if (formData.sellCurrency && formData.sellQty) {
        // Fetch the price associated with sellCurrency
        const sellPrice = prices[formData.sellCurrency];

        // Calculate sellAmount
        const sellAmount = parseFloat(sellPrice) * parseFloat(formData.sellQty);

        // Update formData
        setFormData(prevFormData => ({
          ...prevFormData,
          sellPrice: sellPrice,
          sellAmount: sellAmount,
        }));
      }
    }
    updateSellSide();
  }, [formData.sellCurrency, formData.sellQty, formData.sellPrice]);

  // Effect to calculate buyAmount when buyCurrency or sellAmount changes
  useEffect(() => {
    async function updateBuySide() {
      const prices = await fetchPrices();
      if (formData.buyCurrency && formData.sellAmount) {
        // Fetch the price associated with buyCurrency
        const buyPrice = prices[formData.buyCurrency];

        // Calculate buyAmount
        const buyAmount =
          (parseFloat(formData.sellAmount) * (100 - FEES)) / 100;

        const buyQty = (buyAmount / buyPrice).toFixed(5);

        // Update formData
        setFormData(prevFormData => ({
          ...prevFormData,
          buyPrice: buyPrice,
          buyAmount: buyAmount,
          buyQty: buyQty,
        }));
      }
    }
    updateBuySide();
  }, [formData.buyCurrency, formData.sellAmount, formData.buyPrice]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select a Cryptocurrency</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Search cryptocurrencies..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            mb={4}
          />
          <Box maxH="500px" overflowY="auto">
            <VStack align="stretch" spacing={4}>
              {filteredCryptos.map(crypto => (
                <HStack
                  key={crypto.id}
                  p={2}
                  borderRadius="md"
                  _hover={{ bg: 'gray.100' }}
                  cursor="pointer"
                  onClick={() => {
                    console.log('Selected:', crypto.name);
                    if (state === 'SELL') {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        sellCurrency: crypto.name,
                      }));
                    } else {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        buyCurrency: crypto.name,
                      }));
                    }
                    onClose();
                  }}
                >
                  {getCryptoImage(crypto.id)}
                  <Text>{crypto.name}</Text>
                </HStack>
              ))}
              {filteredCryptos.length === 0 && <Text>No Results Found</Text>}
            </VStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CoinSelectModal;
