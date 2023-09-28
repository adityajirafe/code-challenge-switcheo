import React, { useEffect } from 'react';
import {
  VStack,
  FormControl,
  HStack,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import DropdownPicker from './DropdownPicker';

function CoinView({ children, state, formData, setFormData }) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <VStack
      borderRadius={10}
      padding={4}
      mt={5}
      bgColor={colorMode === 'light' ? 'gray.100' : 'teal'}
    >
      {state === 'SELL' && (
        <Text fontSize={'xs'} alignSelf={'start'}>
          You Pay
        </Text>
      )}

      {state === 'BUY' && (
        <Text fontSize={'xs'} alignSelf={'start'}>
          You Receive
        </Text>
      )}

      <HStack width={'100%'}>
        <FormControl>{children}</FormControl>
        <DropdownPicker
          state={state}
          formData={formData}
          setFormData={setFormData}
        />
      </HStack>

      <Text fontSize={'xs'} alignSelf={'start'}>
        Amount: $
        {state === 'SELL'
          ? formData.sellAmount.toFixed(3)
          : formData.buyAmount.toFixed(3)}
      </Text>
    </VStack>
  );
}

export default CoinView;
