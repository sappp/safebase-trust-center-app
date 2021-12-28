import { useEffect, useState, useRef } from "react";
import axios from "axios";

const useFetch = (url, useInterval=false) => {
  const mountedRef = useRef(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState("");
  
  const getData = async () => {
    try {
      if (mountedRef.current) setIsLoading(true);
      const response = await axios.get(url);
      if (mountedRef.current) {
        Array.isArray(response.data)
          ? setData(response.data)
          : setData([response.data]);

        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    mountedRef.current = true;
    getData()
    if (useInterval) {
      const interval = setInterval(() => {
        getData();
      }, 60000);

      return () => {
        clearInterval(interval);
        mountedRef.current = false;
      };
    }

    return () => {
      mountedRef.current = false;
    }

  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
