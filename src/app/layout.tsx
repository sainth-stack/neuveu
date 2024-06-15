'use client';

import { ReactNode, useEffect } from 'react';
import '../styles/index.scss';
// import ScrollToTop from '@/components/common/ScrollTop';
import Footer from '@/app/footer/page';
import Header from '@/components/Header/Header';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {

  return (
    <html lang='en'>
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className='main-page-wrapper'>
          <Header />
          {children}
          <Footer />
          {/* <ScrollToTop /> */}
        </div>
      </body>
    </html>
  );
}
