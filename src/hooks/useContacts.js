import axios from "axios";
import { useEffect, useState } from "react";

export const useContacts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get("https://randomuser.me/api/?results=100");
      const { data } = resp;

      if (data.error) {
        throw new Error(data.error);
      }

      setData(data.results);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    isError,
  };
};
