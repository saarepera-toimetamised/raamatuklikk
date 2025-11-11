import type { Metadata } from "next";
import "./globals.css";

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
    images: [
      {
        url: 'https://raamatuklikk.ee/Raamatuklikk_logo.png',
        width: 1200,
        height: 630,
        alt: 'Raamatuklikk logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raamatuklikk - Valitud raamatupoed üle maailma',
    description: 'Leia parimad raamatupoed paljudes riikides ja keeltes.',
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
        
      >
        {children}
                <script 
          data-goatcounter="https://raamatuklikk.goatcounter.com/count"
          async 
          src="//gc.zgo.at/count.js"
        ></script>
      </body>
    </html>
  );
}