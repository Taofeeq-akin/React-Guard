import { useEffect, useState } from "react";

// function name of a custom hook must start with use (so react can quickly understand is a hook)
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return counter;
};

export default useCounter;
