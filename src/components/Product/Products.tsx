import { coffees } from '../../data/data.json';
import Container from '../utilities/Container';
import CardProduct from './CardProduct';

const Products = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-start text-center font-extrabold leading-relaxed mb-10 text-base_subtitle font-baloo2">
            Nossos cafés
          </h1>

          <div className="flex flex-wrap lg:justify-start justify-center gap-12">
            {coffees.map((coffee) => (
              <CardProduct key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
