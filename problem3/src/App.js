import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import Layout from './layout';
import ExchangeForm from './components/ExchangeForm';

function App() {
  return (
    <Layout>
      <Box textAlign="center" fontSize="xl">
        <VStack spacing={8}>
          <ExchangeForm />
        </VStack>
      </Box>
    </Layout>
  );
}

export default App;
