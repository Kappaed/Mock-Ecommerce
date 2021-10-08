export const sortByAlphabetical = (a, b) => {
  return a?.title?.localeCompare(b.title);
};

export const sortByLowestToHighestPrice = (a, b) => {
  return a?.price - b?.price;
};

export const sortByHighestToLowestPrice = (a, b) => {
  return -(a?.price - b?.price);
};

export const sortProducts = (selected, products) => {
  let sortedArr = [...products];
  switch (selected) {
    case "alphabetical":
      sortedArr?.sort(sortByAlphabetical);
      break;
    case "Least Expensive":
      sortedArr?.sort(sortByLowestToHighestPrice);
      break;
    case "Most Expensive":
      sortedArr?.sort(sortByHighestToLowestPrice);
      break;
    default:
      break;
  }

  return sortedArr;
};
