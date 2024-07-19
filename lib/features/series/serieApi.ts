// services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }) =>
  async ({ url, method, data, params }: { url: string; method: any; data?: any; params?: any }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as any;
      toast.error(err);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const serieApi = createApi({
  reducerPath: 'seriesApi',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_DEV + '/api/series' }),
  endpoints: (builder) => ({
    getSeries: builder.mutation<{ level: [] }, void>({
      query: (credentials) => ({
        url: '/all',
        method: 'get',
        data: credentials,
      }),
    }),
  }),
});

export const { useGetSeriesMutation } = serieApi;
