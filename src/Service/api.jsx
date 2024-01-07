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
