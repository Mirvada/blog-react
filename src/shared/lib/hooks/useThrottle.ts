import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const callbackRef = useRef(callback);
  const throttledRef = useRef(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: any[]) => {
    if (throttledRef.current) return;

    callbackRef.current(...args);
    throttledRef.current = true;

    setTimeout(() => {
      throttledRef.current = false;
    }, delay);
  }, [delay]);
}
