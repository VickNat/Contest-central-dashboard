import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupApi = createApi({
  reducerPath: "groupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/Group/",
  }),
  endpoints: (builder) => ({
    // get all groups
    getAllGroups: builder.query({
      query: () => ({
        url: `GetAllGroups`,
        method: "GET",
      }),
    }),

    // get group by id
    getGroupById: builder.query({
      query: (id) => ({
        url: `GetGroupById/${id}`,
        method: "GET",
      }),
    }),

    // get group by location
    getGroupByLocation: builder.query({
      query: (location) => ({
        url: `GetGroupByLocation/${location}`,
        method: "GET",
      }),
    }),

    // get ranked groups
    getRankedGroups: builder.query({
      query: () => ({
        url: `GetRankedGroups`,
        method: "GET",
      }),
    }),

    // create new group
    createGroup: builder.mutation({
      query: (data) => ({
        url: `CreateGroup`,
        method: "POST",
        body: data,
      }),
    }),

    // update group
    updateGroup: builder.mutation({
      query: (data) => ({
        url: `UpdateGroup`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete group
    deleteGroup: builder.mutation({
      query: (id) => ({
        url: `DeleteGroup/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllGroupsQuery,
  useGetGroupByIdQuery,
  useCreateGroupMutation,
  useUpdateGroupMutation,
  useDeleteGroupMutation,
} = groupApi;
