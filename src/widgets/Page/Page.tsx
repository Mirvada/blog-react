import { memo, ReactNode, RefObject, UIEvent, useEffect, useRef } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getScrollByPath, scrollAction } from 'features/ScrollSave';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(function Page(props: PageProps) {
  const {
    className,
    children,
    onScrollEnd,
  } = props;

  const wrapperRef = useRef(null) as RefObject<HTMLDivElement | null>;
  const triggerRef = useRef(null) as RefObject<HTMLDivElement | null>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef,
  });

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const onScroll = useThrottle((evt: UIEvent) => {
    dispatch(scrollAction.setScrollPosition({
      path: pathname,
      position: evt.currentTarget?.scrollTop,
    }));
    console.log('scroll');
  }, 500);

  return (
    <section
      className={cn(s.page, className)}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
