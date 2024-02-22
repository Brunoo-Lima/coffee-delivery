import { coffees } from '../../data/data.json';
import Container from '../utilities/Container';
import CardProduct from './CardProduct';

const Products = () => {
  return (
    <section className="py-10">
      <Container>
        <h1 className="text-3xl font-extrabold leading-relaxed mb-10 text-base_subtitle font-primary">
          Nossos cafés
        </h1>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-y-12 justify-items-center">
          {coffees.map((coffee) => (
            <CardProduct key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
