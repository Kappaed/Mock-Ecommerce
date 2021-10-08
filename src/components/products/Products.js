import styled from "styled-components";
import DisplayGrid from "../shared/DisplayGrid";
import Product from "./Product";
import { useState } from "react";

const Products = (props) => {
  console.log("child", props.productList);
  return (
    <DisplayGrid>
      {props.productList?.map((item) => {
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
