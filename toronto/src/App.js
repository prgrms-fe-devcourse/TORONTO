import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import {
  HomePage,
  AboutPage,
  NotFoundPage,
  Login,
  SignUp,
  UserProfilePage,
  EditProfilePage,
} from '@pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='/profile/edit' element={<EditProfilePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
