import DisplayGrid from "../shared/DisplayGrid";
import Product from "./Product";
import styled from "styled-components";

const ProductGrid = styled(DisplayGrid)`
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Products = (props) => {
  return (
    <ProductGrid>
      {props.productList?.map((item) => {
        const productLink = props.toCategory
          ? `/category/${item.category}`
          : `/product/${item.id}`;
        return (
          <li key={item.id}>
            <Product
              productInfo={item}
              // title={item.title}
              // img={item.image}
              // price={item.price}
              // id={item.id}
              // link={productLink}
            />
          </li>
        );
      })}
    </ProductGrid>
  );
};

export default Products;
