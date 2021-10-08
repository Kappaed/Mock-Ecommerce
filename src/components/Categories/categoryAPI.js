import axios from "axios";
export const ALL_CATEGORIES = "https://fakestoreapi.com/products/categories";

export const grabProductsFromCategory = (category) => {
  const URL = "https://fakestoreapi.com/products/category/" + category;
  return axios.get(URL).then((res) => res.data);
};
