import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Card from '@/components/Card';
import SRE from '../../../public/images/assets/SRE.png';
import Cloud from '../../../public/images/assets/cloud.png';
import Containerization from '../../../public/images/assets/containerization.png';
import Analytics from '../../../public/images/assets/Analytics.png';
import Devops from '../../../public/images/assets/devops.png';
import platform from '../../../public/images/assets/Platform_engineering.png';
import rock from '../../../public/images/assets/rock.png';
import Bca from '../../../public/images/assets/Bca.png';
import King from '../../../public/images/assets/king.png';
import message from '../../../public/images/assets/messages.png';
import Image from 'next/image';

import ConsultantTemplate from '@/components/Consultant';
import NumberAnimation from '../NumberAnimation';
const ThirdSection = () => {

  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setNumbers({ number1: 16, number2: 22, number3: 18 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className='third-main-container'>
      <div className='elementor-container'>
        <div style={{ width: "100%" }}>
          <div className='content-section'>
            <div style={{ marginBottom: '20px', width: '100%', textAlign: 'center' }}>
              <div style={{ marginBottom: '37px' }}>
                <Typography
                  fontWeight={700}
                  fontSize={'40px'}
                  color={'#ffff'}
                  letterSpacing={'20px'}
                  textTransform={'uppercase'}
                >
                  why our consultants
                </Typography>
              </div>
            </div>
            <Grid container display={'flex'} justifyContent={'center'}>
              <Grid item md={6} pr={'3rem'}>
                <div className='iteck-image-animation-rotate'>
                  <div className='rock-img'>
                    <Image src={rock} alt='img' />
                  </div>

                </div>

              </Grid>
              <Grid item md={6} >
                <Typography fontSize={'15px'} color={'#fff'} mb={3}>
                  WE CREATE DIFFERENTIATED VALUE TO <br /> RISE TO THE TOP IN THIS
                  FIELD
                </Typography>
                <ConsultantTemplate
                  head={'Business Centric Approach'}
                  img={Bca}
                  desc={`Your business priorities are our driving force, we build relationships 
                 based on shared success and collaboration.					`}
                />
                <ConsultantTemplate
                  head={'Expertise and Specialization'}
                  img={King}
                  desc={`
						Unparalleled digital and cloud expertise to deliver tailored solutions					`}
                />
                <ConsultantTemplate
                  head={'					Comprehensive Solutions and Support					'}
                  img={message}
                  desc={`
						End-to-end services for your digital and cloud needs, with ongoing support and maintenance	.`}
                />

                <Button variant="outlined" style={{ background: '#02010100', borderColor: '#15F1FF', borderRadius: '30px', padding: '7px 25px', fontSize: '12px', borderWidth: '1px', marginTop: '70px', color: '#fff' }}>Request A Consultation</Button>
              </Grid>
            </Grid>
            <Grid container justifyContent={'center'} gap={'60px'}>
              <Grid item display={'flex'} gap={'20px'} justifyContent={'center'} alignItems={'center'}>
                <Typography fontSize={'40px'} fontWeight={'400'} color='#F8F9FA'><NumberAnimation number={numbers.number1} /></Typography>
                <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'} color='#F8F9FA'>YEARS OF CONSULTING <br /> EXPERIENCE</Typography>

              </Grid>
              <Grid item display={'flex'} gap={'20px'} justifyContent={'center'} alignItems={'center'}>
                <Typography fontSize={'40px'} fontWeight={'400'} color='#F8F9FA'><NumberAnimation number={numbers.number2} /></Typography>
                <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'} color='#F8F9FA'>PROJECTS <br /> COMPLETED</Typography>

              </Grid>
              <Grid item display={'flex'} gap={'20px'} justifyContent={'center'} alignItems={'center'}>
                <Typography fontSize={'40px'} fontWeight={'400'} color='#F8F9FA'><NumberAnimation number={numbers.number3} /></Typography>
                <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'} color='#F8F9FA'>SATISFIED CLIENTS ON   <br />8 COUNTRIES</Typography>

              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection