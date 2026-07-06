import { RefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  wrapperRef: RefObject<HTMLElement | null>;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      if (triggerRef.current) observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (triggerRef.current) observer.unobserve(triggerRef.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
