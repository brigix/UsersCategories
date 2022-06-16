import { useSelector } from 'react-redux';

export const useUsersByCategory = () => {
  const usersList = useSelector(
    state => state.userRegistration.usersByCategory
  );
  return usersList;
};
