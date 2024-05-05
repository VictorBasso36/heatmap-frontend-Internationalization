import { GeistSans } from 'geist/font/sans';
import '../globals.css';
import {NextIntlClientProvider, useMessages} from 'next-intl';

export const metadata = {
  title: 'Dashboard - Heatmap',
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
    <html lang={locale} className={GeistSans.className}>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}