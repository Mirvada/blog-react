import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { cn } from 'shared/lib/cn';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  {
    value: Currency.RUB,
    content: Currency.RUB,
  },
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
];

export const CurrencySelect = memo(function CurrencySelect(props: CurrencySelectProps) {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Currency);
    }
  }, [onChange]);

  return (
    <Select
      className={cn('', className)}
      label={t('CURRENCY')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
