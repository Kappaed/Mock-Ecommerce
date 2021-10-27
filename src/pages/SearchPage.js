import axios from "axios";
import Breadcrumb from "../components/header/Breadcrumb";
import CommonLayout from "../components/shared/CommonLayout";
import { useParams } from "react-router";
import SectionHeading from "../components/shared/SectionHeading";
import Divider from "../components/shared/Divider";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useEffect, useState } from "react";
import Products from "../components/products/Products";

function fuzzyMatch(pattern, str) {
  pattern = ".*" + pattern.split("").join(".*") + ".*";
  const re = new RegExp(pattern);
  return re.test(str);
}
const FETCH_URL = "https://fakestoreapi.com/products";

const SearchPage = () => {
  const { searchInput } = useParams();
  const [products, setProducts] = useState(null);
  const filteredProducts = products?.filter((product) =>
    fuzzyMatch(searchInput, product.title)
  );
  console.log("filtered", filteredProducts);
  useEffect(() => {
    axios
      .get(FETCH_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => console.err(err.message));
  }, []);
  return (
    <CommonLayout>
      <Divider navDivider />
      <Breadcrumb
        path={[
          {
            name: `Search: ${
              products === null ? 0 : filteredProducts?.length
            } results found for ${searchInput}`,
            link: "/",
          },
        ]}
      />
      {products === null && <LoadingSpinner />}
      <SectionHeading margin="15px 0">
        {filteredProducts?.length > 0 &&
          `Your search for "${searchInput}" revealed the following:`}
        {products !== null &&
          filteredProducts?.length === 0 &&
          `Your search for ${searchInput} did not yield any results.`}
      </SectionHeading>
      <Products productList={filteredProducts} />
    </CommonLayout>
  );
};

export default SearchPage;
