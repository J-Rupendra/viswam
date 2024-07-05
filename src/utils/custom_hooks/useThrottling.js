import { useEffect, useRef } from "react";

const useThrottling = (fun, throttleDelay) => {
  const timerIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, []);

  return function () {
    if (!timerIdRef.current) {
      timerIdRef.current = setTimeout(() => {
        timerIdRef.current = null;
      }, throttleDelay);
      fun(...arguments);
    }
  };
};

export default useThrottling;
