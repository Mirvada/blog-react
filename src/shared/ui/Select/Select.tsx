import { ChangeEvent, memo, useMemo } from 'react';
import { cn } from 'shared/lib/cn';
import s from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(function Select(props: SelectProps) {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const optionList = useMemo(() => {
    return options?.map(({ value, content }) => (
      <option
        className={s.option}
        value={value}
        key={value}
      >
        {content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(evt.target.value);
    }
  };

  return (
    <div
      className={cn(s.wrapper, className)}
    >
      {label && (
        <span className={s.label}>{`${label}>`}</span>
      )}
      <select
        className={s.select}
        name=""
        id=""
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
});
