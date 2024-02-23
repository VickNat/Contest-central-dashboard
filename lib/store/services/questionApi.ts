// write rtk query for questionApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { url } from "inspector";

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-contest-central-api.onrender.com/api/Question/",
  }),
  endpoints: (builder: any) => {
    return {
      //Get All questions
      getAllQuestions: builder.query({
        query: () => ({
          url: `GetAll`,
          method: "GET",
        }),
      }),
      // Get question By Id
      getQuestionById: builder.query({
        query: (id: any) => ({
          url: `GetSingle/${id}`,
          method: "GET",
        }),
      }),

      //Get All contests
      CheckDuplicate: builder.query({
        query: (url: string) => ({
          url: `CheckDuplicate?questionUrl=${url}`,
          method: "GET",
        }),
      }),

      // Get Question From Contest
      GetContestQuestions: builder.query({
        query: (contestId: any) => ({
          url: `GetQuestionsFromContest/${contestId}`,
          method: "GET",
        }),
      }),

      // Create Or Update questions
      CreateOrUpdateQuestions: builder.mutation({
        query: (data: any) => ({
          url: "CreateOrUpdateQuestions",
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export const { useCheckDuplicateQuery } = questionApi;
