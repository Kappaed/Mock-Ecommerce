import DisplayGrid from "../shared/DisplayGrid";
import CatItem from "./CatItem";
import SectionHeading from "../shared/SectionHeading";
import Divider from "../shared/Divider";

const Categories = (props) => {
  const allProducts = props.totalProducts;
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
    <>
      <SectionHeading>Allow your style to match your ambition!</SectionHeading>
      <DisplayGrid perRow={4} gap="20px">
        {productFromEachCategory.map((item, index) => (
          <CatItem category={item.category} img={item.image} key={index} />
        ))}
      </DisplayGrid>
    </>
  );
};

export default Categories;
