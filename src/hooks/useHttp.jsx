import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (httpsUrl, applyTask) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(httpsUrl.url, {
        method: httpsUrl.method ? httpsUrl.method : "GET",
        headers: httpsUrl.headers ? httpsUrl.headers : {},
        body: httpsUrl.body ? JSON.stringify(httpsUrl.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyTask(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { sendRequest, isLoading, error };
};

export default useHttp;
