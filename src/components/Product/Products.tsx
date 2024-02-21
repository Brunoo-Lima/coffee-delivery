import { coffees } from '../../data/data.json';
import CardProduct from './CardProduct';

const Products = () => {
  return (
    <section className="py-20">
      <h1 className="text-3xl font-extrabold leading-relaxed mb-10 text-base_subtitle font-primary">
        Nossos cafés
      </h1>

      <div className="grid md:grid-cols-4 gap-x-3 gap-y-12">
        {coffees.map((coffee) => (
          <CardProduct key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
};

export default Products;
