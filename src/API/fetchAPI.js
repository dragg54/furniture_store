import { useState, useEffect } from "react";
import axios from "axios";

export const BASE_URL = "https://furniturestore54.herokuapp.com/api/items";

const useFetchAPI = (BASE_URL) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setData(response.data);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, [BASE_URL]);
  return [data]
};

export default useFetchAPI;
