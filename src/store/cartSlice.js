import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   items:[],
   totalQuantity: 0,
   totalPrice: 0,
  };

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItem: (state, action) => {
            const item = action.payload;
            console.log("item", item);
            const existingItem = state.items.find((i) => i.id === item.id);
            
            if (existingItem) {
              existingItem.quantity += 1;
              existingItem.totalPrice += item.price;
              state.totalQuantity++;
              state.totalPrice += item.price;
              console.log("existingItem", existingItem);
            } else {
              state.items.push({ ...item, quantity: 1, totalPrice: item.price });
              state.totalQuantity++;
              state.totalPrice += item.price;
              console.log("state.items", state.items);
            }
            
        },
        removeItem : (state, action) => {
          const id = action.payload;
          const existingItem = state.items.find(item => item.id === id);
    
          if (existingItem) {
            state.totalQuantity--;
            state.totalPrice -= existingItem.price;
            existingItem.quantity--;
    
            if (existingItem.quantity === 0) {
              state.items = state.items.filter(item => item.id !== id);
            } else {
              existingItem.totalPrice -= existingItem.price;
            }
          }
        },
        increaseQuantity: (state, action) => {
          console.log("increaseQuantity state.items", state.items);
          console.log("increaseQuantity action", action.payload);
          const item = state.items.find((i) => i.id === action.payload.id);
          if (item) {
            item.quantity += 1;
            item.totalPrice += item.price;
            state.totalQuantity++;
            state.totalPrice += item.price;
          }
        },
        decreaseQuantity: (state, action) => {
          const item = state.items.find((i) => i.id === action.payload.id);
          if (item && item.quantity > 1) {
            state.totalQuantity--;
            state.totalPrice -= item.price;
            item.quantity--;
          }
        }
    }
  });

  export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
  export const cartReducer = cartSlice.reducer;;