import CommonLayout from "../components/shared/CommonLayout";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/header/Breadcrumb";
import Divider from "../components/shared/Divider";
import { grabProductsFromCategory } from "../components/categories/categoryAPI";
import { useEffect, useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";
import Products from "../components/products/Products";
import Dropdown from "../components/sort-dropdown/Dropdown";
import { sortProducts } from "../components/sort-dropdown/dropdown-sorters";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const ClothingHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedDropdown, setSelectedDropdown] = useState("alphabetical");
  const [isLoading, setIsLoading] = useState(false);
  const [productsForCategory, setProductsForCategory] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    grabProductsFromCategory(category).then((products) => {
      setProductsForCategory(products);
      setIsLoading(false);
    });
  }, [category]);

  const sortedProducts = sortProducts(selectedDropdown, productsForCategory);
  return (
    <CommonLayout>
      <Divider />
      <Breadcrumb path={[{ name: category, link: `/category/${category}` }]} />
      <ClothingHeader>
        <SectionHeading>{category}</SectionHeading>
        <Dropdown setOption={setSelectedDropdown} selected={selectedDropdown} />
      </ClothingHeader>
      <Products productList={sortedProducts} />
      {isLoading && <LoadingSpinner />}
    </CommonLayout>
  );
};

export default CategoryPage;
