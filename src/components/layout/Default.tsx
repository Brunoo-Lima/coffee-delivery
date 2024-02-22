import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Default = () => {
  return (
    <div className="font-font-baloo2 bg-base_background">
      <Header />
      <Outlet />
    </div>
  );
};

export default Default;
