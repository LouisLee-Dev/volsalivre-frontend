// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authApi } from '@/lib/features/auth/authApi';
import authReducer from '@/lib/features/auth/authSlice';
import { schoolsApi } from '@/lib/features/schools/schoolsApi';
import schoolsReducer from '@/lib/features/schools/schoolsSlice';
import { levelApi } from '@/lib/features/level/levelApi';
import levelReducer from '@/lib/features/level/levelSlice';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [schoolsApi.reducerPath]: schoolsApi.reducer,
    schools: schoolsReducer,
    [levelApi.reducerPath]: levelApi.reducer,
    level: schoolsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, schoolsApi.middleware, levelApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;