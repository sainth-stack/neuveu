import React, { useState, useEffect } from 'react';



const NumberAnimation = ({ number }:any) => {
  const [count, setCount] = useState < number > (0);

  useEffect(() => {
    let interval:any;
    if (number > 0) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < number) {
            return prevCount + 1;
          } else {
            if (interval) clearInterval(interval);
            return prevCount;
          }
        });
      }, 100); // Adjust the interval as needed for smoother/faster animation
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [number]);

  return <div>{count}</div>;
};

export default NumberAnimation;

// usage
// const [numbers, setNumbers] = useState({
//   number1: 0,
//   number2: 0,
//   number3: 0,
// });
// useEffect(() => {
//   const handleScroll = () => {
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     // Check if the user has scrolled to the bottom of the page
//     // if (windowHeight + scrollTop === documentHeight) {
//     // Set the numbers you want to animate when scrolled to the bottom
//     setNumbers({ number1: 100, number2: 150, number3: 30 }); // You can set any numbers here
//     // }
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// <NumberAnimation number={numbers.number1} />
