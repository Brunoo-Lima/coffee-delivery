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
    <div>
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
  );
};

export default Product;
