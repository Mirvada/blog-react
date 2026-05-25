import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readOnly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocus = () => {
    ref.current?.focus();
  };

  const onBlur = () => {
    ref.current?.blur();
  };

  return (
    <label
      className={cn(s.inputWrapper, className)}
    >
      {placeholder && (
        <span>
          {`${placeholder}>`}
        </span>
      )}
      <input
        className={cn(s.input, readOnly && s.readOnly)}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        readOnly={readOnly}
        {...otherProps}
      />
    </label>
  );
});
