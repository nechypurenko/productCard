import { createSlice } from '@reduxjs/toolkit';

const shipmentInfoFormSlice = createSlice({
  name: 'shipmentInfoForm',
  initialState: {
    address: '',
    apartment: '',
    city:'',
    country: '',
    state: '',
    zip: '',
  },
  reducers: {
    saveShipmentFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveShipmentFormData } = shipmentInfoFormSlice.actions;
export const shipmentInfoFormReducer = shipmentInfoFormSlice.reducer;