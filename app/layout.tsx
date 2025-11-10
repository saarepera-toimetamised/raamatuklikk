import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Raamatuklikk - Valitud raamatupoed üle maailma',
  description: 'Leia parimad raamatupoed iga riigi ja keele kirjanduse jaoks. 105+ poodi üle maailma - kohalik kirjandus, kultuuriline eripära, väikesed keeled.',
  keywords: ['raamatupood', 'kirjandus', 'raamatud', 'bookstore', 'independent bookstore', 'kirjandusajakirjad', 'kirjastused'],
  authors: [{ name: 'Raamatuklikk' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Raamatuklikk - Valitud raamatupoed üle maailma',
    description: 'Leia parimad raamatupoed iga riigi ja keele kirjanduse jaoks. 105+ poodi üle maailma.',
    url: 'https://raamatuklikk.ee',
    siteName: 'Raamatuklikk',
    locale: 'et_EE',
    type: 'website',
      images: [                                    // <-- LISA SEE
      {
        url: 'https://raamatuklikk.ee/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Raamatuklikk logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raamatuklikk - Valitud raamatupoed üle maailma',
    description: 'Leia parimad raamatupoed iga riigi ja keele kirjanduse jaoks.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}