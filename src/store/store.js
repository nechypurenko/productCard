import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice'
import { contactInfoFormReducer } from './contactInfoSlice'
import { shipmentInfoFormReducer } from './shipmentInfoSlice'

export const store = configureStore({
  reducer: { 
    cart: cartReducer,
    contactInfo: contactInfoFormReducer,
    shipmentInfo: shipmentInfoFormReducer
  },
});