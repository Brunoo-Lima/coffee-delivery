import { createBrowserRouter } from 'react-router-dom';
import Default from './components/layout/Default';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import OrderFinished from './components/order/OrderFinished';
import OrderForm from './components/order/OrderForm';

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
        path: '/orderForm',
        element: <OrderForm />,
      },
      {
        path: '/orderFinished',
        element: <OrderFinished />,
      },
    ],
  },
]);
