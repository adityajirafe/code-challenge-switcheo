import React from 'react';
import { Text, Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function Header() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p={2}
      borderBottom="1px solid"
      borderBottomColor="ButtonShadow"
    >
      <Flex alignItems="center">
        <Logo h="40px" pointerEvents="none" />
        <Text ml={4} fontSize="lg" fontWeight="bold" color="teal.500">
          CryptoSwap
        </Text>
      </Flex>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
}

export default Header;
