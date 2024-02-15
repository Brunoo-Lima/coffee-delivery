type ListProductsProps = {
  imgUrl: string;
  altImg: string;
  type: string[];
  name: string;
  description: string;
  price: number;
};

const ListProduct = ({
  type,
  imgUrl,
  altImg,
  name,
  description,
  price,
}: ListProductsProps) => {
  return (
    <div>
      <div>
        <img src={imgUrl} alt={altImg} />

        <div>
          <span>{type}</span>

          <p>{name}</p>

          <p>{description}</p>

          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
