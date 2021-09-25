import styled from "styled-components";
import useGetData from "../../hooks/useGetData";
import DisplayGrid from "../shared/DisplayGrid";
import Product from "./product";

const Products = (props) => {
  const productList = props.productSet;
  return (
    <DisplayGrid>
      {productList.map((item) => {
        const productLink = props.toCategory
          ? `/category/${item.category}`
          : `/product/${item.id}`;
        return (
          <li key={item.id}>
            <Product
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              link={productLink}
            />
          </li>
        );
      })}
    </DisplayGrid>
  );
};

export default Products;
