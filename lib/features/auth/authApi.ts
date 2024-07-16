// services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }) =>
  async ({ url, method, data, params }: { url: string; method: any; data?: any; params?: any }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as any;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_DEV + '/api' }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/users/login',
        method: 'post',
        data: credentials,
      }),
    }),
    register: builder.mutation<{ name: string }, { name:string; cpf:string; email: string; password: string; password2: string }>({
      query: (credentials) => ({
        url: '/users/register',
        method: 'post',
        data: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
