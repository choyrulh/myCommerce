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
