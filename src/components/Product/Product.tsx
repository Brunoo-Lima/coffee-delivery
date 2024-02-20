import ListProduct from './ListProduct';
import { coffees } from '../../data/coffees';

export type ProductType = {
  id: number;
  imgUrl: string;
  altImg: string;
  type: string[];
  name: string;
  description: string;
  price: number;
};

const Product = () => {
  return (
    <section className="py-20">
      <h1 className="text-3xl font-extrabold leading-relaxed mb-10">
        Nossos cafés
      </h1>

      <div className="grid md:grid-cols-4 gap-x-3 gap-y-12">
        {coffees.map((coffee) => (
          <div key={coffee.id}>
            <ListProduct
              type={coffee.type}
              imgUrl={coffee.imgUrl}
              altImg={coffee.altImg}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
