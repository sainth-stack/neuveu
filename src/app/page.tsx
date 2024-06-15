'use client'
import MiddleContent from './FirstSection';
import FourthSection from './FourthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
// import Insurance from './home/page';

// export const metadata = {
//   title: 'Insurance || Jano - Creative Multipurpose React NextJS Template',
// };

const MainRoot = () => {
  return <>
    <MiddleContent />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </>;
};

export default MainRoot;
