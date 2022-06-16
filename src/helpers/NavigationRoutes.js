import { UserRegistration, CategoryCreation, UsersByCategory } from './../pages';
import { Routes, Route } from 'react-router-dom';

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryCreation />} />
      <Route path="/userRegistration" element={<UserRegistration />} />
      <Route path="/categoryCreation" element={<CategoryCreation />} />
      <Route path="/user/create" element={<UserRegistration />} />
      <Route path="/users" element={<UserRegistration />} />
      <Route path="/categories" element={<CategoryCreation />} />
      <Route path="/category/create" element={<CategoryCreation />} />
      <Route path="/usersList/:category" element={<UsersByCategory />} />
    </Routes>
  );
};

export default NavigationRoutes;
