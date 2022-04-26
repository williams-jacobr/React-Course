import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialCartState = { show: false, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: intialCartState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
    show(state) {
      state.show = true;
    },
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(action.payload);
      console.log(state.items);

      if (itemIndex >= 0) {
        state.items[
          state.items.map((item) => item.id).indexOf(action.payload.id)
        ].total++;
      }

      if (itemIndex < 0) {
        state.items.push({ ...action.payload, total: 1 });
      }
    },
    increment(state, action) {
      state.items[state.items.map((item) => item.id).indexOf(action.payload.id)]
        .total++;
    },
    decrement(state, action) {
      state.items[state.items.map((item) => item.id).indexOf(action.payload.id)]
        .total--;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
