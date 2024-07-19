// features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import { setFromLocalStorage } from "@/utils/localstorage";

interface SchoolsState {
  items: any[]; // Replace with your data type
  loading: boolean;
  error: string | null
}

const initialState: SchoolsState = {
  items: [],
  loading: false,
  error: null,
};

const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {    
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = schoolsSlice.actions;
export default schoolsSlice.reducer;
