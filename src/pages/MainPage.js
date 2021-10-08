import CommonLayout from "../components/shared/CommonLayout";
import SectionHeading from "../components/shared/SectionHeading";
import Products from "../components/products/Products";
import useFetchProductData from "../hooks/useFetchProductData";
import Categories from "../components/categories/Categories";
import { ProductActions } from "../store/ProductSlice";
import { ALL_PRODUCTS } from "../components/products/productAPI";
import { ALL_CATEGORIES } from "../components/categories/categoryAPI";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const MainPage = () => {
  const isProductsLoading = useFetchProductData(
    ALL_PRODUCTS,
    ProductActions.setProducts
  );
  const isCategoriesLoading = useFetchProductData(
    ALL_CATEGORIES,
    ProductActions.setCategories
  );
  const productList = useSelector((state) => state.products).slice(0, 9);
  return (
    <CommonLayout>
      <SectionHeading>Featured Collection</SectionHeading>
      {isProductsLoading && <LoadingSpinner />}
      <Products toCategory productList={productList} />
      <SectionHeading>Allow your style to match your ambition!</SectionHeading>
      {isCategoriesLoading && <LoadingSpinner />}
      <Categories />
    </CommonLayout>
  );
};

export default MainPage;
