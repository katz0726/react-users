import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/layouts/Header';

export const HeaderLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};