import CommonLayout from "../components/shared/CommonLayout";
import styled from "styled-components";
import { useParams } from "react-router";

const ProductPage = () => {
  const { productID } = useParams();
  return (
    <CommonLayout>
      <p> {`This is the product page for ${productID}`}</p>
    </CommonLayout>
  );
};

export default ProductPage;
