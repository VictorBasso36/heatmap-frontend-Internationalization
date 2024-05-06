import Header from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import BannerMain from '@/components/LangPage/bannerMain';
import Teste from '@/components/test';
export default async function Index() {
  return (
    <>
    <Header />
    <main>
      <BannerMain />
    </main>
    </>
  );
}