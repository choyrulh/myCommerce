import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "https://dummyjson.com/",
});

// search all product
export const getAllProducts = async () => {
  try {
    const { data } = await axiosCreate.get(`products`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
