import DisplayGrid from "../shared/DisplayGrid";
import { useEffect, useState } from "react";
import Product from "../products/Product";
import axios from "axios";

const isProductInArr = (id, arr) => {
  let bool = false;
  arr.forEach((prod) => {
    if (prod.id === id) {
      bool = true;
    }
  });
  return bool;
};

const Recommended = (props) => {
  const [otherProducts, setOtherProducts] = useState([]);
  const fetchUrl = `https://fakestoreapi.com/products/category/${props.category}`;
  const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
  let chosenProducts = shuffled.slice(0, 4);
  while (isProductInArr(props.id, chosenProducts)) {
    if (otherProducts.length <= 4) {
      chosenProducts = chosenProducts.filter(
        (product) => product.id !== props.id
      );
    } else {
      const nextShuffle = [...otherProducts].sort(() => 0.5 - Math.random());
      chosenProducts = nextShuffle.slice(0, 4);
    }
  }
  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => setOtherProducts(res.data))
      .catch((err) => console.error(err.message));
  }, [fetchUrl]);

  return (
    <DisplayGrid perRow="4">
      {chosenProducts.map((product) => (
        <Product
          key={product.id}
          link={`https://fakestoreapi.com/products/${product.id}`}
          img={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </DisplayGrid>
  );
};

export default Recommended;
