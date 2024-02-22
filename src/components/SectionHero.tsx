import Hero from '../../public/images/hero.svg';
import Hero_bg from '../../public/images/hero-bg.svg';
import Container from './utilities/Container';

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react';

const SectionHero = () => {
  return (
    <section className="py-10">
      <div
        style={{
          background: `url(${Hero_bg})`,
          backgroundSize: 'cover',
        }}
        className="py-10"
      >
        <Container>
          <div className="flex justify-between">
            <div className="flex flex-col w-[588px]">
              <h1 className="text-base_title font-extrabold text-5xl font-primary w-[650px] leading-tight mb-6">
                Encontre o café perfeito para qualquer hora do dia
              </h1>

              <p className="text-base_subtitle text-xl font-normal font-second mb-16">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul className="grid grid-cols-2 w-[600px] h-[84px] gap-2">
                <li className="flex items-center gap-2">
                  <div className="bg-yellow_dark rounded-full w-8 h-8 flex items-center justify-center">
                    <ShoppingCart color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-second text-base">
                    Compra simples e segura
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-base_text rounded-full w-8 h-8 flex items-center justify-center">
                    <Package color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-second text-base">
                    Embalagem mantém o café intacto
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-yellow rounded-full w-8 h-8 flex items-center justify-center">
                    <Timer color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-second text-base">
                    Entrega rápida e rastreada
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-purple rounded-full w-8 h-8 flex items-center justify-center">
                    <Coffee color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-second text-base">
                    O café chega fresquinho até você
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <img src={Hero} alt="Icone de bebida" width={476} height={360} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SectionHero;
