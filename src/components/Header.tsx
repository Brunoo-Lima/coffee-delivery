import Logo from '../../public/images/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import Container from './utilities/Container';

const Header = () => {
  return (
    <header className="p-8 bg-base_background">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="Logo da loja" />
          </div>

          <ul className="flex gap-4 items-center">
            <li className="flex items-center justify-evenly bg-purple_light w-[143px] h-[38px] px-1 rounded-md cursor-pointer group">
              <MapPin
                size={20}
                weight="fill"
                className="text-purple_dark transition duration-300 group-hover:text-purple"
              />
              <p className="text-purple_dark group-hover:text-purple transition duration-300 font-second">
                São Paulo, SP
              </p>
            </li>

            <li className="bg-yellow_light w-[38px] h-[38px] flex items-center justify-center rounded-md cursor-pointer group relative">
              <ShoppingCart
                size={20}
                weight="fill"
                className="text-yellow_dark group-hover:text-yellow transition duration-300"
              />

              <span className="absolute -top-2 -right-2 text-white bg-yellow_dark rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs font-second">
                1
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
