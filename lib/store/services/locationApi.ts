import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/Location/",
  }),
  endpoints: (builder: any) => ({
    //Get All Locations
    getAllLocations: builder.query({
      query: () => ({
        url: `GetAllLocations`,
        method: "GET",
      }),
    }),
    // Get Location By Id
    getLocationById: builder.query({
      query: (id: any) => ({
        url: `GetLocationById/${id}`,
        method: "GET",
      }),
    }),
    // Create Location
    createLocation: builder.mutation({
      query: (data: any) => ({
        url: `CreateLocation`,
        method: "POST",
        body: data,
      }),
    }),
    // Update Location
    updateLocation: builder.mutation({
      query: (data: any) => ({
        url: `UpdateLocation`,
        method: "PUT",
        body: data,
      }),
    }),
    // Delete Location
    deleteLocation: builder.mutation({
      query: (id: any) => ({
        url: `DeleteLocation/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllLocationsQuery,
  useGetLocationByIdQuery,
  useCreateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
} = locationApi;
