import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }: { url: string; method: any; data?: any; params?: any; headers?: any; }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params, headers });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as any;      
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
    addSchool: builder.mutation<{ success: string }, { title: string; star: string; city: string; neigh: string; level: string; turno: string[]; type: string; scholarUnit: string; amount: string; monthlyState:string; regFee: string; vagas: string; mark: File; }>({
      query: (credentials) => {
        const formData = new FormData();    
    
        Object.keys(credentials).forEach(key => {
          let value = (credentials as any)[key];
          if (value instanceof File) {
            console.log(`Appending file: ${key}`, value);
          } else {
            if (Array.isArray(value) || typeof value === 'object') {
              // Convert array or object to JSON string
              value = JSON.stringify(value);
            }
            console.log(`Appending value: ${key}`, value);
          }
          formData.append(key, value);
        });
        
        return {
          url: '/add',
          method: 'POST',
          data: formData,
          headers: { 'Content-Typ': 'multipart/form-data' }
        }
      },
    }),
        
    
    getByPrivate: builder.mutation<{ privateSchool: [] }, void>({
      query: () => ({
        url: '/getByPrivate',
        method: 'get',
      }),
    }),
    getAll: builder.mutation<{ privateSchool: [] }, void>({
      query: () => ({
        url: '',
        method: 'get',
      }),
    }),
    getByName: builder.mutation<{ schoolByNameList: [] }, { title: string }>({
      query: (credentials) => ({
        url: '/getByName',
        method: 'get',
        data: credentials,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/ban-types
    getAllByParams: builder.mutation<{ schoolByParamList: {}}, { title: string; star: string; city: string; neigh: string; level: any; shift: any; type: string; scholarUnit: any; amount: string; benefits: any; }>({
      query: () => ({
        url: '/getParams',
        method: 'get',
      }),
    }),
  }),
});

export const {
  useStepSearchMutation,
  useAddSchoolMutation,  
  useGetByPrivateMutation,
  useGetAllMutation,
  useGetByNameMutation,
} = schoolsApi;
