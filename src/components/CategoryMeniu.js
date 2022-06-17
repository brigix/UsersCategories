import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, VStack } from '@chakra-ui/react';
import { useCategories } from '../helpers/getCategories';
import { userActions } from '../redux/actions/user.actions';
import LinkButton from './LinkButton';

const CategoryMeniu = () => {
  const categoriesArr = useCategories();
  let key = 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCategory = category => {
    navigate(`usersList/${category}`, { replace: true });
    dispatch(userActions.getUsersByCategory(category));
  };

  return (
    <VStack
      spacing={2}
      align="stretch"
      width={{ md: 40 }}
      pt="10px"
      pb="10px"
      pl="3px"
    >
      {categoriesArr.map(value => {
        key++;
        return (
          <Box
            key={key}
            justifyItems="left"
            width={{ md: 40 }}
            textOverflow="hidden"
          >
            <LinkButton
              key={'1_' + value.Category_1 + key}
              value={value.category_1}
              getCategory={getCategory}
            />
            <LinkButton
              key={'2_' + value.subCategory_2 + key}
              value={value.subCategory_2}
              getCategory={getCategory}
              pl="5px"
            />
            <LinkButton
              key={'3_' + value.subCategory_3 + key}
              value={value.subCategory_3}
              getCategory={getCategory}
              pl="10px"
            />
          </Box>
        );
      })}
    </VStack>
  );
};

export default CategoryMeniu;
