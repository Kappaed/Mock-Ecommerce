import CommonLayout from "../components/shared/CommonLayout";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

const CATEGORIES_API = "https://fakestoreapi.com/products/categories";

const CategoryPage = () => {
  const { category } = useParams();
  const categories = useGetData(CATEGORIES_API);
  return (
    <CommonLayout categorySet={categories}>
      <p>{`This is the category page for ${category}`}</p>
    </CommonLayout>
  );
};

export default CategoryPage;
