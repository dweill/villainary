import type { Metadata } from 'next';
import Navbar from './Navbar';
import ThemeRegistry from './ThemeRegistry';
import './globals.css';
import Providers from './providers/Provider';

export const metadata: Metadata = {
    title: 'Villainary',
    description: 'Become the Villain in your own story',
};

// app/layout.js
export default function RootLayout(props: { children: any }) {
    const { children } = props;
    return (
        <html lang="en">
            <body className="body">
                <Providers>
                    <ThemeRegistry options={{ key: 'mui' }}>
                        <Navbar></Navbar>
                        <main className="flex min-h-screen  items-center justify-center p-24">
                            {children}
                        </main>
                    </ThemeRegistry>
                </Providers>
            </body>
        </html>
    );
}
