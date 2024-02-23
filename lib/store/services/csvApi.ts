import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const csvApi = createApi({
  reducerPath: "csvApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/CsvFile/",
  }),
  endpoints: (builder: any) => ({
    //Get Sample File
    getCsv: builder.query({
      query: () => ({
        url: `GetSampleCsv`,
        method: "GET",
      }),
    }),

    //  Upload Csv File
    uploadCsv: builder.mutation({
      query: (data: any) => ({
        url: `UploadCsvFile`,
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
        },
        body: data,
      }),
    }),
  }),
});

export const { useGetCsvQuery, useUploadCsvMutation } = csvApi;
