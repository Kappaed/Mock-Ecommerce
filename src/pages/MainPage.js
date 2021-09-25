import CommonLayout from "../components/shared/CommonLayout";
import SectionHeading from "../components/shared/SectionHeading";
import Products from "../components/products/Products";
import useGetData from "../hooks/useGetData";
import Categories from "../components/Categories/Categories";

const API_ALL_PROD = "https://fakestoreapi.com/products";
const CATEGORIES_API = "https://fakestoreapi.com/products/categories";

const MainPage = () => {
  const products = useGetData(API_ALL_PROD);
  const categories = useGetData(CATEGORIES_API);

  return (
    <CommonLayout categorySet={categories}>
      <SectionHeading>Featured Collection</SectionHeading>
      <Products productSet={products.slice(0, 9)} toCategory />
      <Categories totalProducts={products} />
    </CommonLayout>
  );
};

export default MainPage;
