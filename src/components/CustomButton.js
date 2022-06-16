import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomButton = prop => {
  return (
    <Button
      background="gray.800"
      color="white"
      borderRadius="5"
      width="100px"
      height="40px"
      marginTop="10"
      _hover={{
        boxShadow:
          '0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(255, 255, 255, .15)',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(255, 255, 255, .15)',
      }}
      type="submit"
      leftIcon={prop.children}
      variant="outline"
    >
      {prop.title}
    </Button>
  );
};

export default CustomButton;
