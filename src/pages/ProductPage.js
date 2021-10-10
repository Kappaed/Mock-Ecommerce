import CommonLayout from "../components/shared/CommonLayout";
import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Divider from "../components/shared/Divider";
import Breadcrumb from "../components/header/Breadcrumb";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import axios from "axios";
import PurchaseInfo from "../components/purchase-info/PurchaseInfo";
import SectionHeading from "../components/shared/SectionHeading";
import Recommended from "../components/purchase-info/Recommended";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 100px 0;
`;

const StyledText = styled.p`
  margin-bottom: 30px;
  font-weight: lighter;
  line-height: 1.6;
`;

const ProductPage = () => {
  const { productID } = useParams();
  const FETCH_URL = `https://fakestoreapi.com/products/${productID}`;
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(FETCH_URL)
      .then((res) => {
        setProductData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, [FETCH_URL]);

  return (
    <CommonLayout>
      <Divider />
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <Breadcrumb
            path={[
              {
                link: `/category/${productData?.category}`,
                name: productData?.category,
              },
              { link: "/", name: productData?.title },
            ]}
          />
          <MainWrapper>
            <PurchaseInfo productInfo={productData} />
          </MainWrapper>
          <SectionHeading margin="50px 0 15px 0"> Product Info </SectionHeading>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            elementum lorem, quis feugiat lectus. Maecenas a elit nec urna
            tincidunt accumsan eget vel neque. Duis interdum luctus egestas.
            Integer quis dignissim enim. Duis pulvinar quis sapien eget
            facilisis. Aliquam erat volutpat. Morbi eu lorem turpis. Integer
            nibh libero, iaculis tempor volutpat eu, dignissim sed purus. Nam
            sit amet posuere neque. Sed at nibh nulla. Duis justo libero, cursus
            vel est molestie, pulvinar porttitor elit. Nullam semper tincidunt
            nulla ac efficitur. Proin ornare euismod convallis. Mauris tincidunt
            sodales tellus, lacinia hendrerit tellus viverra non. Nunc vel
            gravida metus. Praesent iaculis.
          </StyledText>
          <Divider />
          <SectionHeading margin="15px 0">You may also like</SectionHeading>
        </>
      )}

      <Recommended category={productData?.category} id={productData?.id} />
    </CommonLayout>
  );
};

export default ProductPage;
