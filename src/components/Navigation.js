import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { VStack, Divider, Button } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import CategoryMeniu from './CategoryMeniu';

const Navigation = () => {
  const [selectedUserRegistration, setSelectedUserRegistrantion] =
    useState(false);
  const [selectedCategoryCreation, setSelectedCategoryCreation] =
    useState(false);

  const onClickUserRegistration = () => {
    setSelectedUserRegistrantion(true);
    setSelectedCategoryCreation(false);
  };
  const onClickCategoryCreation = () => {
    setSelectedCategoryCreation(true);
    setSelectedUserRegistrantion(false);
  };
  const url = window.location.pathname.toString();
  useEffect(() => {
    if (url.includes('usersList')) {
      setSelectedCategoryCreation(false);
      setSelectedUserRegistrantion(false);
    }
  }, [url]);
  return (
    <VStack spacing={2} align="stretch" width={{ md: 40 }} paddingTop="20px">
      <Button
        variant="ghost"
        onClick={onClickCategoryCreation}
        leftIcon={selectedCategoryCreation && <CheckIcon />}
      >
        <NavLink to="/categoryCreation">Category Creation </NavLink>
      </Button>
      <Button
        variant="ghost"
        onClick={onClickUserRegistration}
        leftIcon={selectedUserRegistration && <CheckIcon />}
      >
        <NavLink to="/userRegistration">User Registration</NavLink>
      </Button>
      <Divider />
      <CategoryMeniu />
    </VStack>
  );
};

export default Navigation;
