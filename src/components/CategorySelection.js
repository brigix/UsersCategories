import { React } from 'react';
import { useSelector } from 'react-redux';
import { Select, Box } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import { useField } from 'formik';
import { convertObjectToArray } from '../helpers/services';
import './style.css';

const CategorySelection = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let key = 0; 

  /* FOR REAL BACKEND GET ALL CATEGORIES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryActions.getAllCategories());
  }); */

  const categoriesObjArray = useSelector(
    state => state.categoryCreation.categories
  );
  const categoriesFlatArray = categoriesObjArray.map(obj =>
    convertObjectToArray(obj)
  ).flat(Infinity);

  let isCategories = false;
  if (categoriesFlatArray.length !== 0) { isCategories = true };

  return (
    <Box>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Select
        id="category"
        name="category"
        bg="whiteAlpha.600"
        borderColor="gray.800"
        color="gray.800"
        placeholder="Select user category"
        marginTop="2"
        size="md"
        icon={<TriangleDownIcon color="gray.800" />}
        _checked={{
          bg: 'gray.800',
          color: 'white',
          borderColor: 'gray.800',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(255, 255, 255, .15)',
        }}
        {...field}
        {...props}
      >
        {categoriesFlatArray.map(value => {
          key++;
          return (
            <option key={'select' + value+key.toString()} value={value}>
              {value}
            </option>
          );
        })}
      </Select>
      {!isCategories && <div className="error">Create some categories !</div>}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Box>
  );
};

export default CategorySelection;
