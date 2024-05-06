import { useTranslations } from 'next-intl';

export default function Teste(){
    const t = useTranslations('LandingPage');
    return  <p>{t('title').toLocaleUpperCase()}</p>
}