import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: '/api/products', 
        params 
      }),
      providesTags:["Product"]
    }),
    getCategory: build.query({
      query: (params) => ({ 
        url: '/api/categories', 
        params 
      }),
      providesTags:["Category"]
    }),
    createProduct: build.mutation({
      query: (body)=> ({
        url: "/api/products",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    createCategory: build.mutation({
      query: (body)=> ({
        url: "/api/categories",
        method: "POST",
        body
      }),
      invalidatesTags: ["Category"]
    }),
    updateProduct: build.mutation({
      query: ({_id, body})=> ({
        url: `/api/products/${_id}`,
        method: "PUT",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    updataCategory: build.mutation({
      query: ({_id, body})=> ({
        url: `/api/categories/${_id}`,
        method: "PUT",
        body
      }),
      invalidatesTags: ["Category"]
    }),
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/api/products/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    }),
    deleteCategory: build.mutation({
      query: (id)=> ({
        url:`/api/categories/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Category"]
    }),
  }),
})

export const {
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdataCategoryMutation,
  useGetProductsQuery,
  useGetCategoryQuery,
} = productApi