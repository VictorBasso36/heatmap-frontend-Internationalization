import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata = {
  title: 'Supabase Next Auth',
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
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}