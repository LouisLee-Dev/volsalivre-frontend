// services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ url, method, data }: { url: string; method: string; data?: any }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as any;
      toast.error(err)
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
    register: builder.mutation<{ name: string }, { name:string; cpf:string; email: string; phone: string; password: string; password2: string }>({
      query: (credentials) => ({
        url: '/users/register',
        method: 'post',
        data: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
