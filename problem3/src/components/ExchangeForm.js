// src/ExchangeForm.js
import React, { useState } from 'react';
import {
  VStack,
  Box,
  Image,
  FormControl,
  Input,
  Button,
  HStack,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import settings from '../assets/settings.svg';
import SuccessModal from '../modals/SuccessModal';
import CoinView from './CoinView';
import FeaturePendingModal from '../modals/FeaturePendingModal';

function ExchangeForm() {
  const [formData, setFormData] = useState({
    sellCurrency: '',
    sellQty: 0,
    sellPrice: 0,
    sellAmount: 0,
    buyCurrency: '',
    buyQty: 0,
    buyPrice: 0,
    buyAmount: 0,
  });

  const { colorMode } = useColorMode();

  const handleChangeSell = e => {
    const { value } = e.target;
    const qty = parseFloat(value);
    setFormData({
      ...formData,
      sellQty: qty,
    });
  };

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFeaturePendingModalOpen, setIsFeaturePendingModalOpen] =
    useState(false);

  const onSuccessModalOpen = () => {
    setIsSuccessModalOpen(true);
  };

  const onFeaturePendingModalOpen = () => {
    setIsFeaturePendingModalOpen(true);
  };

  const onFeaturePendingModalClose = () => {
    setIsFeaturePendingModalOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // onOpen();
    onSuccessModalOpen();
  };

  const clearHistory = () => {
    setFormData({
      sellCurrency: '',
      sellQty: 0,
      sellPrice: 0,
      sellAmount: 0,
      buyCurrency: '',
      buyQty: 0,
      buyPrice: 0,
      buyAmount: 0,
    });
    setIsSuccessModalOpen(false);
  };

  return (
    <VStack
      spacing={4}
      bgColor={colorMode === 'light' ? 'white' : 'gray.700'}
      color={colorMode === 'light' ? 'gray.700' : 'white'}
      minW={'xl'}
      minH={'md'}
      justifyContent={'center'}
      borderRadius={20}
      boxShadow={'2xl'}
      p={4}
    >
      <HStack width={'95%'} justifyContent={'space-between'} flex={1} pt={4}>
        <HStack>
          <Text fontSize={'md'} alignSelf={'start'}>
            Swap
          </Text>
          <Text fontSize={'md'} alignSelf={'start'}>
            /
          </Text>
          <Text
            fontSize={'md'}
            alignSelf={'start'}
            opacity={0.5}
            cursor="pointer"
            transition="opacity 0.3s"
            _hover={{ opacity: 0.2 }}
            onClick={() => onFeaturePendingModalOpen()}
          >
            Buy
          </Text>
        </HStack>
        <Image
          src={settings}
          h="30px"
          alignSelf={'start'}
          cursor="pointer"
          transition="opacity 0.3s"
          _hover={{ opacity: 0.2 }}
          onClick={() => onFeaturePendingModalOpen()}
        />
      </HStack>
      <Box width={'95%'} flex={3}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <CoinView
              state={'SELL'}
              formData={formData}
              setFormData={setFormData}
            >
              <Input
                type="number"
                name="fromCurrency"
                placeholder="0"
                pl={0}
                fontSize={36}
                border={'none'}
                focusBorderColor="transparent"
                value={formData.sellQty}
                onChange={handleChangeSell}
              />
            </CoinView>
          </FormControl>
          <FormControl>
            <CoinView
              state={'BUY'}
              formData={formData}
              setFormData={setFormData}
            >
              <Input
                type="number"
                name="fromCurrency"
                placeholder="0"
                pl={0}
                fontSize={36}
                border={'none'}
                focusBorderColor="transparent"
                value={formData.buyQty}
                disabled={true}
              />
            </CoinView>
          </FormControl>
          <Button
            type="submit"
            mt={7}
            colorScheme={colorMode === 'light' ? 'teal' : 'teal'}
          >
            Exchange
          </Button>
          <SuccessModal
            isOpen={isSuccessModalOpen}
            clearHistory={clearHistory}
          />
          <FeaturePendingModal
            isOpen={isFeaturePendingModalOpen}
            onClose={onFeaturePendingModalClose}
          />
        </form>
      </Box>
    </VStack>
  );
}

export default ExchangeForm;
