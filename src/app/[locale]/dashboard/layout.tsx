import { Plus_Jakarta_Sans } from "next/font/google";;
import '../globals.css';
import {NextIntlClientProvider, useMessages} from 'next-intl';
const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700', '800' ], variable: '--PlusJakartaSans' }, );

export const metadata = {
  title: 'Dashboard Next Auth',
  description: '',
};

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string};
}) {
  return (
    <html lang={locale} className={plus_Jakarta_Sans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}