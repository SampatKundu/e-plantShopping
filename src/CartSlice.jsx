import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {            
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      console.log("inside addItem reducer - " + action.payload.name)
      if (existingItem) {
          // If the item exists, increase the quantity
          existingItem.quantity += 1;
      } else {
          // If the item doesn't exist, add it to the cart with a quantity of 1
          state.items.push({ ...action.payload, quantity: 1 });
      }
  },
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload;
      console.log("inside removeItem reducer::"+itemNameToRemove)

      state.items = state.items.filter(item => item.name !== itemNameToRemove);

    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      console.log("inside updateQuantity reducer name:"+action.payload.name + " amount:" + action.payload.amount)

      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = amount;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
