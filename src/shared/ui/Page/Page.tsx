import { memo, ReactNode, RefObject, useRef } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

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

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef,
  });

  return (
    <section
      className={cn(s.page, className)}
      ref={wrapperRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
