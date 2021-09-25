import { useState, useEffect } from "react";
import Axios from "axios";

const useGetData = (BASE_URL) => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    Axios.get(BASE_URL)
      .then((res) => setFetchData(res.data))
      .catch((err) => {
        console.error(err.message);
      });
  }, [BASE_URL]);
  return fetchData;
};

export default useGetData;
