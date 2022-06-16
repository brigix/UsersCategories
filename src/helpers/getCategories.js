import { useSelector } from 'react-redux';
import { convertObjectToArray } from '../helpers/services';

export const useCategories = () => {
    const categoriesObjArray = useSelector(
  state => state.categoryCreation.categories
    );

const categoriesJSONArray = categoriesObjArray
  .map(obj => JSON.stringify(obj))
  
    return categoriesObjArray;
}

export const useFlatCategories = () => {
  const categoriesObjArray = useSelector(
    state => state.categoryCreation.categories
  );
  const categoriesFlatArray = categoriesObjArray
    .map(obj => convertObjectToArray(obj))
    .flat(Infinity);
  return categoriesFlatArray;
};