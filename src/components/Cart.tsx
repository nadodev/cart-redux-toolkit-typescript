// Styles


interface Props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}
const Cart = ({ isVisible, setIsVisible }: Props ) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <div>
      {
        isVisible && <div />
      }
      <button onClick={handleEscapeAreaClick} />
      <div>
        <p>Seu Carrinho</p>
      </div>
    </div>
  );
};

export default Cart;
