
import Image from "next/image";
import styles from './bannerMain.module.css'
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function BannerMain() {
const t = useTranslations('LandingPage');

  return (
    <section className={styles.bannerMain}>
        <div className={styles.bannerContainer}>
            <h1>{t('title')}</h1>
        </div>
    </section>
  );
}
