import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from './ThemeRegistry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Villainary',
  description: 'Become the Villain in your own story',
};

// app/layout.js
export default function RootLayout(props: { children: any }) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
