import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}
interface CartState {
  list: CartItem[];
  total: number;
}
const initialState: CartState = {
  list: [],
  total: 0,
};

const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.list.find((product) => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.list.push(item);
      }
      state.total += item.price * item.quantity;
    },
    checkout(state) {
      state.list = [];
      state.total = 0;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const itemIndex = state.list.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const item = state.list[itemIndex];
        state.total -= item.price * item.quantity;
        state.list.splice(itemIndex, 1);
      }
    },
  },
});
export default sliceCart.reducer;

export const { addToCart, checkout, removeFromCart } = sliceCart.actions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCart = (state: any) => {
  return state.cart as CartState[];
};
