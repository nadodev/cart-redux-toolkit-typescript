import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import products from "../data/products"; // Certifique-se de que o caminho está correto
import { addToCart, checkout, removeFromCart } from "../redux/sliceCart"; // Certifique-se de que o caminho está correto
import { AppDispatch, RootState } from "../redux/store"; // Certifique-se de que o caminho está correto

interface Product {
  name: string;
  quantity?: number;
  price: number;
  imageUrl: string;
  id: string;
}

const ProductItem: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch: AppDispatch = useDispatch();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAddToCart = (product: Product) => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.name,
          price: product.price,
          quantity: 1,
        })
      );
    }
  };
 const handleRemoveFromCart = (productId: string) => {
   dispatch(removeFromCart(productId));
 };
  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleConfirmCheckout = () => {
    dispatch(checkout());
    setShowCheckout(false);
  };

  return (
    <div>
      <h1>Produtos</h1>
      <p>Total: R${cart.total}</p>

      <div>
        <h2>Produtos Disponíveis:</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="">
              <div className="w-full h-60">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button onClick={() => handleAddToCart(product)}>
                <BsCartPlus />
                Adicionar ao carrinho
              </button>
              <div>
                <p>{product.name}</p>
                <p>R${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mt-10">Produtos no Carrinho:</h2>
      </div>
      <div className="w-full mt-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
        <div className="flex flex-col gap-4">
          {cart.list.length > 0 ? (
            cart.list.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-md shadow-md flex justify-between items-center"
              >
                <div className="mb-2">
                  <p className="font-bold">{product.title}</p>
                  <p className="text-gray-600">Preço: R${product.price}</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Quantidade: {product.quantity}
                  </p>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remover do carrinho
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">O carrinho está vazio</p>
          )}
        </div>
      </div>
      {showCheckout && (
        <div>
          <h2>Resumo da Compra</h2>
          <div className="flex flex-col gap-2">
            {cart.list.map((product) => (
              <div key={product.id} className="border p-2">
                <p>{product.title}</p>
                <p>R${product.price}</p>
                <p>Quantidade: {product.quantity}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 mb-4">Total: R${cart.total}</p>
          <button
            onClick={handleConfirmCheckout}
            className="bg-zinc-500 hover:bg-zinc-600 text-white py-2 px-4 rounded"
          >
            Confirmar
          </button>
        </div>
      )}

      <div className="mt-6 mb-6">
        {cart.list.length > 0 && (
          <button
            onClick={handleCheckout}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Finalizar Compra
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
