import { HStack, Heading, Text, ListItem } from '@chakra-ui/react';
import React from 'react';

const FormatedUserInfo = (key, user, ...props) => {
  const fullName = user.name + ' ' + user.surname;
  return (
    <ListItem key={fullName + key}>
      <HStack>
        <Heading size="sm">{fullName}</Heading>
        <Text size="sm">{user.category}</Text>
      </HStack>
    </ListItem>
  );
};

export default FormatedUserInfo;
