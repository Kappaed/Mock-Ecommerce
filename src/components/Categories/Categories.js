import DisplayGrid from "../shared/DisplayGrid";
import CatItem from "./CatItem";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CategoryGrid = styled(DisplayGrid)`
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

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
    <CategoryGrid perRow={4} gap="20px">
      {productFromEachCategory.map((item, index) => (
        <CatItem category={item.category} img={item.image} key={index} />
      ))}
    </CategoryGrid>
  );
};

export default Categories;
