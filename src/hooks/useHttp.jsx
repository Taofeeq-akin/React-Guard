import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Using usecallback to prevent useEffect in app.js from re-running always
  const sendRequest = async (httpsUrl, applyTask) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(httpsUrl);

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
