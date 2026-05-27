import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { cn } from 'shared/lib/cn';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  {
    value: Country.Russia,
    content: Country.Russia,
  },
  {
    value: Country.Kazakhstan,
    content: Country.Kazakhstan,
  },
  {
    value: Country.Belarus,
    content: Country.Belarus,
  },
  {
    value: Country.Armenia,
    content: Country.Armenia,
  },
];

export const CountrySelect = memo(function CurrencySelect(props: CountrySelectProps) {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Country);
    }
  }, [onChange]);

  return (
    <Select
      className={cn('', className)}
      label={t('COUNTRY')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
