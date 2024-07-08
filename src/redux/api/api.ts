import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const baseApi=createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:7000'}),
    endpoints:(builder)=>({
        getTodo:builder.query({
            query:()=>({
                url:'/order',
                method:'GET',
            })
        })
    })
})

export const {useGetTodoQuery}=baseApi