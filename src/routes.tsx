import { createBrowserRouter } from 'react-router-dom';
import Default from './components/layout/Default';
import Home from './components/Home';
import Cart from './components/cart/Cart';
import OrderFinished from './components/order/OrderFinished';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/orderFinished',
        element: <OrderFinished />,
      },
    ],
  },
]);
