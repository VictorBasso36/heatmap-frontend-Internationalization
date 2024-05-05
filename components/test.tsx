import { useTranslations } from 'next-intl';

export default function Teste(){
    const t = useTranslations('Index');
    return  <p>{t('Navbar.Venture').toLocaleUpperCase()}</p>
}