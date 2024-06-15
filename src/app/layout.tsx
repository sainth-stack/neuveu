'use client';

import { ReactNode, useEffect } from 'react';
import '../styles/index.scss';
// import ScrollToTop from '@/components/common/ScrollTop';
import Footer from '@/app/footer/page';
import Header from '@/components/Header/Header';
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from '@/components/Header/ScrollTop';

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
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={6}
            outerSize={35}
            color="255, 255 ,255"
            outerAlpha={0.5}
            innerScale={1}
            outerScale={1}
            outerStyle={{
              borderRadius: "50%",
              borderWidth: '2px',
              borderStyle: 'solid',
              borderImage: 'linear-gradient(to right, #0DCAF0, #6F42C1, #D63384) 1',
              boxSizing: 'border-box',
              width: "35px",
              height: "35px",
              backgroundClip: 'content-box'
            }}
            innerStyle={{
              backgroundColor: "#0dcaf0"
            }}
          />
        </div>
        <div className='main-page-wrapper'>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
