import Logo from '/images/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import Container from '../utilities/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsCount } from '../../redux/cart/cart-selectors';

const Header = () => {
  const navigate = useNavigate();

  const productsCount = useSelector(selectProductsCount);

  const handleOpenCart = () => {
    navigate('/cart');
  };

  return (
    <header className="p-8">
      <Container>
        <div className="flex sm:flex-row flex-col justify-between items-center md:gap-0 gap-4">
          <Link to="/">
            <img src={Logo} alt="Logo da loja" width={84.95} height={40} />
          </Link>

          <ul className="flex gap-4 items-center">
            <li className="flex items-center justify-evenly bg-purple_light w-[143px] h-[38px] px-1 rounded-md cursor-pointer group">
              <MapPin
                size={20}
                weight="fill"
                className="text-purple_dark transition duration-300 group-hover:text-purple"
              />
              <p className="text-purple_dark group-hover:text-purple transition duration-300 font-roboto text-sm">
                São Paulo, SP
              </p>
            </li>

            <li
              className="bg-yellow_light w-[38px] h-[38px] flex items-center justify-center rounded-md cursor-pointer group relative"
              onClick={handleOpenCart}
            >
              <ShoppingCart
                size={20}
                weight="fill"
                className="text-yellow_dark group-hover:text-yellow transition duration-300"
              />

              <span className="absolute -top-1.5 -right-2 text-white bg-yellow_dark rounded-full size-5 flex items-center justify-center font-bold text-xs font-roboto">
                {productsCount}
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
