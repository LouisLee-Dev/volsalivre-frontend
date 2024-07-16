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

  export const schoolsApi = createApi({
    reducerPath: 'schoolsApi',
    baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_DEV + '/api/schools' }),
    endpoints: (builder) => ({
      stepSearch: builder.mutation<{ token: string }, { email: string; password: string }>({
        query: (credentials) => ({
          url: '/level/stepSearch',
          method: 'post',
          data: credentials,
        }),
      }),
      addSchool: builder.mutation<{ success: string }, { title:string; star:string; position: string; at: string; level: any; shift: any; type: string; scholarUnit: string; amount:string }>({
        query: (credentials) => ({
          url: '/add',
          method: 'post',
          data: credentials,
        }),
      }),
      updateSchool: builder.mutation<{ success: string }, { title:string; star:string; position: string; at: string; level: any; type: string; }>({
        query: (credentials) => ({
          url: '/edit',
          method: 'post',
          data: credentials,
        }),
      }),
      addLevel: builder.mutation<{ name: string }, { name:string; cpf:string; email: string; password: string; password2: string }>({
        query: (credentials) => ({
          url: '/level/add/:name',
          method: 'post',
          data: credentials,
        }),
      }),
      getByPrivate: builder.mutation<{ privateSchool: [] }, void>({
        query: (credentials) => ({
          url: '/getByPrivate',
          method: 'get',
          data: credentials,
        }),
      }),
      getAll: builder.mutation<{ privateSchool: [] }, void>({
        query: (credentials) => ({
          url: '',
          method: 'get',
          data: credentials,
        }),
      }),
      getByName: builder.mutation<{ schoolByNameList: [] }, {title: string}>({
        query: (credentials) => ({
          url: '/getByName',
          method: 'get',
          data: credentials,
        }),
      }),
    }),
  });
  
  export const { useStepSearchMutation, useUpdateSchoolMutation, useGetAllMutation, useGetByNameMutation, useAddLevelMutation, useAddSchoolMutation, useGetByPrivateMutation } = schoolsApi;
  