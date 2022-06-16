import React from 'react';
import { Center, Heading, Box, useColorModeValue } from '@chakra-ui/react';
import * as colorPalette from './../helpers/colorMode';

const Footer = () => {
  const bg = useColorModeValue(colorPalette.lightBg, colorPalette.darkBg);
  const color = useColorModeValue(colorPalette.color, colorPalette.color);

  return (
    <Box
      padding="5px"
      alignItems="center"
      verticalAlign="baseline"
      bg={bg}
      color={color}
      sx={{
        position: '-webkit-sticky',
        /* Safari */ position: 'sticky',
        bottom: '0',
      }}
    width="100vw"
    >
      <Center>
        <Heading as="h4" size="1xl" noOfLines={1}>
          2022 - Brigta Šliaužytė
        </Heading>
      </Center>
    </Box>
  );
};

export default Footer;
