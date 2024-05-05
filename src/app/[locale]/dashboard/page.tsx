import Header from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import Teste from '@/components/test';
export default async function Index() {
  return (
    <div>
      dashboard
      <Teste />
      <Header />
      <Hero />
    </div>
  );
}