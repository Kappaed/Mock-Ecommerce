import DisplayGrid from "../shared/DisplayGrid";
import CatItem from "./CatItem";
import { useSelector } from "react-redux";

const Categories = (props) => {
  const allProducts = useSelector((state) => state.ProductReducer.productList);
  const flag = new Set();
  const productFromEachCategory = allProducts.filter((product) => {
    if (flag.has(product.category)) {
      return false;
    } else {
      flag.add(product.category);
      return true;
    }
  });

  return (
    <DisplayGrid perRow={4} gap="20px">
      {productFromEachCategory.map((item, index) => (
        <CatItem category={item.category} img={item.image} key={index} />
      ))}
    </DisplayGrid>
  );
};

export default Categories;
