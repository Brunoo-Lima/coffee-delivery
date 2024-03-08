import Header from '../home/Header';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Default = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Default;
