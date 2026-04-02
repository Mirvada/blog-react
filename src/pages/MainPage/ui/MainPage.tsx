import { useTranslation } from "react-i18next"

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>{t('MAIN_PAGE')}</div>
  )
}

export default MainPage