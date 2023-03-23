import { useState, useEffect } from "react";
import Papa from "papaparse";

const useFetch = (url, options) => {

  const [status, setStatus] = useState({
    loading: false,
    data: undefined,
    error: undefined
  });

  function fetchNow(url, options) {
    setStatus({ loading: true });
    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setStatus({ loading: false, data: res.data });
    //   })
    //   .catch((error) => {
    //     setStatus({ loading: false, error });
    //   });
    Papa.parse(url,
        {
         download: true,
         header: true,
         complete: (results) => {
            setStatus({ loading: false, data: results.data })
         },
         skipEmptyLines: true,
         error: (error) => {
           console.error(error);
           setStatus({ loading: false, error });
       }
       })
  
  }

  useEffect(() => {
    if (url) {
      fetchNow(url, options);
    }
  }, []);

  return { ...status, fetchNow };
}

export default useFetch