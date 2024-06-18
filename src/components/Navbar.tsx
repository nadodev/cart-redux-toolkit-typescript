import { useState } from "react";
import { useDispatch } from "react-redux";

// Components

// Styles

// Utilities
import Cart from "./Cart";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch();


  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <div>
      <h1>Redux Shopping</h1>
      <div>
        <div onClick={() => dispatch({ type: "LOGIN" })}>Login</div>

        <div onClick={handleCartClick}>Carrinho</div>
      </div>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </div>
  );
}

export default Header;
