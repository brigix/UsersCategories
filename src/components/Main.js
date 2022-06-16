import React from 'react';
import NavigationRoutes from './../helpers/NavigationRoutes';
import { Box, Stack } from '@chakra-ui/react';

const Main = () => {
  return (
    <Box
      sx={{
        position: '-webkit-sticky',
        /* Safari */ position: 'sticky',
        top: '20',
      }}
    >
      <Stack direction="row" height="100vh">
        <NavigationRoutes />
      </Stack>
    </Box>
  );
};

export default Main;
