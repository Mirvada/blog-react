import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page>
      {t('page')}
      <Counter />
    </Page>
  );
};

export default AboutPage;
