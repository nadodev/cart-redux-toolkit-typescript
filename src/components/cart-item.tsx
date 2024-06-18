import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Styles

interface Product {
  name: string;
  quantity?: number;
  price: number;
  imageUrl: string;
  id: string;
}

const CartItem = ({ product }: { product: Product }) => {
  const handleRemoveClick = () => {};

  const handleIncreaseClick = () => {};

  const handleDecreaseClick = () => {};

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />

      <div>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <div>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </div>
      </div>

      <button onClick={handleRemoveClick} aria-label={`Remove ${product.name}`}>
        <AiOutlineClose size={25} />
      </button>

     
    </div>
  );
};

export default CartItem;
