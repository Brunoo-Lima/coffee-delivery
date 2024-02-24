import Hero from '/images/hero.svg';
import Hero_bg from '/images/hero-bg.svg';
import Container from '../utilities/Container';

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react';

const SectionHero = () => {
  return (
    <section className="md:pb-10 pb-20">
      <div
        style={{
          background: `url(${Hero_bg})`,
          backgroundSize: 'cover',
        }}
        className="py-10"
      >
        <Container>
          <div className="md:flex md:justify-between relative md:px-0 px-8">
            <div className="flex flex-col lg:w-[588px]">
              <h1 className="text-base_title font-extrabold md:text-5xl text-3xl font-baloo2 leading-tight mb-6 max-md:w-[400px] max-sm:w-full">
                Encontre o café perfeito para qualquer hora do dia
              </h1>

              <p className="text-base_subtitle text-xl font-normal font-roboto mb-16">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul className="grid md:grid-cols-2 grid-cols-1 md:w-[600px] w-full h-[84px] gap-2 md:space-y-0 space-y-2 ">
                <li className="flex items-center gap-2">
                  <div className="bg-yellow_dark rounded-full size-8 flex items-center justify-center">
                    <ShoppingCart color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-roboto text-base">
                    Compra simples e segura
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-base_text rounded-full size-8 flex items-center justify-center">
                    <Package color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-roboto text-base">
                    Embalagem mantém o café intacto
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-yellow rounded-full size-8 flex items-center justify-center">
                    <Timer color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-roboto text-base">
                    Entrega rápida e rastreada
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-purple rounded-full size-8 flex items-center justify-center">
                    <Coffee color="#ffffff" size={20} weight="fill" />
                  </div>
                  <p className="font-roboto text-base">
                    O café chega fresquinho até você
                  </p>
                </li>
              </ul>
            </div>

            <div className="max-md:absolute right-0 top-0 max-md:w-28 max-sm:w-16 max-sm:top-8 max-sm:right-14">
              <img src={Hero} alt="Icone de bebida" width={476} height={360} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SectionHero;
