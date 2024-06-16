'use client';

import { ReactNode, useEffect, useState } from 'react';
import '../styles/index.scss';
// import ScrollToTop from '@/components/common/ScrollTop';
import Footer from '@/app/footer/page';
import Header from '@/components/Header/Header';
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from '@/components/Header/ScrollTop';
import Header2 from '@/components/Header2';
import { usePathname } from 'next/navigation';
if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  const pathname = usePathname();
  const [showHeader2, setShowHeader2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowHeader2(true);
      } else {
        setShowHeader2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
            color="255, 255, 255"
            outerAlpha={0.5}
            innerScale={1}
            outerScale={1}
            outerStyle={{
              borderRadius: "50%",
              border: "double 2px transparent",
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),linear-gradient(to right, rgba(13, 202, 240, 0.6), rgba(111, 66, 193, 0.6), rgba(214, 51, 132, 0.6))",
              width: "35px",
              height: "35px",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box"
            }}
            innerStyle={{
              backgroundColor: "#0dcaf0",
              borderRadius: "50%"
            }}
          />
        </div>

        <div className='main-page-wrapper'>
          {pathname === '/contactus' && showHeader2 ? <Header2 /> : <Header />}
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
