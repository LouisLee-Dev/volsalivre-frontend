/* eslint-disable @typescript-eslint/ban-types */
// features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import setAuthToken from '@/utils/setAuthToken';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify'
import { setFromLocalStorage } from "@/utils/localstorage";

interface LevelState {
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  user :{}
}

const initialState: LevelState = {
  token: null,
  status: "idle",
  error: null,
  user: {}
};

const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      setFromLocalStorage(action.payload.token);
      setAuthToken(action.payload.token);
      const decoded = jwtDecode(action.payload.token);
      state.user = decoded;
      state.token = action.payload.token;
      state.status = "succeeded";
      toast.success("Successfully logged in....")
    },
    clearCredentials: (state) => {
      state.token = null;
    },
  },
});


export const { setCredentials, clearCredentials } = levelSlice.actions;
export default levelSlice.reducer;
