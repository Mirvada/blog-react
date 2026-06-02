import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { cn } from 'shared/lib/cn';
import { Button } from '../Button';
import s from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code(props: CodeProps) {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(s.code, className)}>
      <Button
        className={s.copyBtn}
        theme="clear"
        onClick={onCopy}
      >
        <CopyIcon className={s.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
