import React from 'react';
import {
  Heading,
  Flex,
  Box,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './../ColorModeSwitcher';
import * as colorPalette from './../helpers/colorMode';

const Header = () => {
  const bg = useColorModeValue(colorPalette.lightBg, colorPalette.darkBg);
  const color = useColorModeValue(colorPalette.color, colorPalette.color);

  return (
    <Box
      sx={{
        position: '-webkit-sticky',
        /* Safari */ position: 'sticky',
        top: '0',
        zIndex: '9999',
      }}
      width="100vw"
    >
      <Flex alignItems="center" verticalAlign="baseline" bg={bg} color={color}>
        <Box padding="10px">
          <Heading as="h3" size="1xl" noOfLines={1}>
            User categories for Teltonika Networks
          </Heading>
        </Box>
        <Spacer />
        <Box padding="5px">
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
