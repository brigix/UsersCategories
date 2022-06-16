import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Heading,
  UnorderedList,
} from '@chakra-ui/react';
import { useUsersByCategory } from '../helpers/getUsers';
import FormatedUserInfo from '../components/FormatedUserInfo';

const UsersByCategory = props => {
  let usersList = [];
  let key = 0;
  const { category } = useParams();
  usersList = useUsersByCategory();
  if (props.loading) {
    return <CircularProgress isIndeterminate />;
  }

  return (
    <Box>
      <Heading as="h3" size="lg'">
        Users list for selected category:
      </Heading>
      <Heading as="h4" size="md" mb="10">
        {category}
      </Heading>
      {usersList !== undefined && (
        <UnorderedList>
          {usersList.map(user => {
            key++;
            return FormatedUserInfo(key, user);
          })}
        </UnorderedList>
      )}
    </Box>
  );
};

export { UsersByCategory };
