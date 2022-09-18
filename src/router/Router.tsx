import { memo, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { NotFound } from '../components/pages/error/NotFound';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { LoginUserProvider } from '../hooks/providers/LoginUserProvider';

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="user_management" element={<UserManagement />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </LoginUserProvider>
  );
});