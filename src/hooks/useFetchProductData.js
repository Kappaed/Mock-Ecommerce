import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";

const useFetchProductData = (FETCH_URL, actionCallback) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    Axios.get(FETCH_URL)
      .then((res) => {
        dispatch(actionCallback(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [FETCH_URL, dispatch, actionCallback]);
  return isLoading;
};

export default useFetchProductData;
