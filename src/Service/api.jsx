import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "https://dummyjson.com/",
});

// search all product
export const getAllProducts = async () => {
  try {
    const { data } = await axiosCreate.get(`products`);
    const resData = data.products;
    return resData;
  } catch (error) {
    console.log(error);
  }
};
// search all product
export const getAllCategories = async () => {
  try {
    const { data } = await axiosCreate.get(`products/categories`);
    const resData = data.products;
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

// get search by query
export const getSearchByQuery = async (query) => {
  try {
    const { data } = await axiosCreate.get(`products/search?q=${query}`);
    const resData = data.products;
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

// get detail product by id
export const getProductById = async (id) => {
  const response = await axiosCreate.get(`products/${id}`);
  return response.data;
};

// get product by category
export const getProductByCategory = async (category) => {
  const response = await axiosCreate.get(`products/category/${category}`);
  return response.data;
};

// get product by query
export const getProductByQuery = async (query) => {
  const response = await axiosCreate.get(`products/search?q=${query}`);
  return response.data;
};

// get product Smartphones by category
export const getAllSmartphones = async () => {
  try {
    const { data } = await axiosCreate.get(`products/category/smartphones`);
    const resData = data.products;
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};
