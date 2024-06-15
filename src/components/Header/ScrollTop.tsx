'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import upArrow from '../../../public/images/assets/upArrow.svg'
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', () => {
      toggleVisibility();
      calculateScrollProgress();
    });

    return () => window.removeEventListener('scroll', () => {
      toggleVisibility();
      calculateScrollProgress();
    });
  }, []);

  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
      onClick={scrollToTop}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d={`M50,1 a${radius},${radius} 0 0,1 0,98 a${radius},${radius} 0 0,1 0,-98`}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: 'stroke-dashoffset 10ms linear',
          }}
        ></path>
      </svg>
      <Image src={upArrow} width={16} height={16} alt='' />
    </div>
  );
}
