import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_ENGAGE_API_URL });

export const engageApi = createApi({
  reducerPath: 'engageApi',
  baseQuery: baseQuery,
    endpoints: () => ({

    }),
});

export const {

} = engageApi;
