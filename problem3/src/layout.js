import React from 'react';
import { ChakraProvider, Box, Grid, Text, Flex, theme } from '@chakra-ui/react';
import Header from './components/Header';

function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* Header */}
          <Header />

          {/* Content */}
          <Flex minH={'70vh'} justifyContent={'center'} pt={'10'}>
            {children}
          </Flex>

          {/* Footer */}
          <Flex
            borderTop="1px solid"
            borderTopColor="ButtonShadow"
            p={4}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text fontSize="sm" color="gray.500">
              Trade carefully. Cryptocurrency investments are highly volatile
              and involve risks.
            </Text>
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Layout;
