import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutation
      // Redux Toolkit uses Immer library BTS

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // console.log(action);
      // state.items.filter((itm) => itm.id !== action.payload);
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state) => {
      // console.log(state); // ["pizza"]
      // console.log(current(state));
      // state = [];
      // console.log(state); // [] -> but this is the localState not originalState

      // RTK - either Mutate the existing state or return a new State
      // state.items.length = 0; // originalState = { items: [] }

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
