import { createSlice } from '@reduxjs/toolkit';

const contactInfoFormSlice = createSlice({
  name: 'contactInfoForm',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  reducers: {
    saveFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveFormData } = contactInfoFormSlice.actions;
export const contactInfoFormReducer = contactInfoFormSlice.reducer;
