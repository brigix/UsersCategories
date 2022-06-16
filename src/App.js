import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box margin="0">
          <Header />
          <Box p={4} display={{ md: 'flex' }}>
            <Navigation />
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Main />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
