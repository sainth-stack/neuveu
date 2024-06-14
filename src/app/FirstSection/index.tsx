'use client';
import React, { useState, useEffect } from 'react';
import { Grid, Typography,Button } from '@mui/material';
import NumberAnimation from '@/app/NumberAnimation';
import Image from 'next/image';
import mountainImg from '../../../public/images/assets/mountain.png';
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

import ConsultantTemplate from '@/components/Consultant';

export default function MiddleContent() {
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
    <Grid container justifyContent='center' className='first-section'>
      <Grid item sx={{ zIndex: 1 }}>
        <Typography
          color='#F8F9FA'
          fontFamily='Inter'
          fontSize='91px'
          fontWeight='700'
          letterSpacing='51px'
        >
          NEU VEU
        </Typography>
        <Grid container justifyContent='center'>
          <Typography fontSize={'20px'} fontWeight={'300'} color='#F8F9FA'>
            Best Solutions for{' '}
          </Typography>
        </Grid>
        <Grid container justifyContent='center'>
          <Typography fontSize={'20px'} fontWeight={'300'} color='#F8F9FA'>
            <strong style={{ fontWeight: '700' }}>Digital &amp; Cloud</strong>{' '}
            Services
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent='center'
        display={'flex'}
        gap={'80px'}
        mt={'600px'}
        sx={{ zIndex: 1 }}
      >
       
        <Typography
          textAlign={'center'}
          fontSize={'20px'}
          fontWeight={'500'}
          lineHeight={'24px'}
          color='#F8F9FA'
        >
          We can help to maintain and modernize your Digital & Cloud
          infrastructure and solve various <br /> digital
          transformation-specific issues a business may face.
        </Typography>
        <Typography
          textAlign={'center'}
          fontSize={'14px'}
          fontWeight={'400'}
          lineHeight={'24px'}
          color='#F8F9FA'
        >
          Neu Veu is the partner of choice for many of the world’s leading
          <br /> enterprises, SMEs and technology challengers. We help
          businesses elevate their value through. <br />
          DevSecOps, Analytics, Cloud, SRE and Platform Engineering consultancy
          services.
        </Typography>
      </Grid>

      <div className='mountain-img-container'>
        <div className='mountain-widget-container'>
          <div className='iteck-image'>
            <Image loading="lazy" decoding="async" width="1478" height="1486" src={mountainImg} alt="mountain" />
          </div>
        </div>
      </div>
      <Grid container justifyContent={'center'}>
        <Typography
          fontWeight={700}
          fontSize={'40px'}
          color={'#ffff'}
          letterSpacing={'20px'}
          textTransform={'uppercase'}
        >
          why our consultants
        </Typography>
        <Grid container display={'flex'} justifyContent={'center'} p={5.5}>
          <Grid item md={6} style={{transition:'background .3s, border .3s, border-radius .3s, box-shadow .3s, transform var(--e-transform-transition-duration, .4s)'}}>
            <Image src={rock} alt='img' />{' '}
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

            <Button variant="outlined" style={{background:'#02010100',borderColor:'#15F1FF',borderRadius:'30px',padding:'7px 25px',fontSize:'12px',borderWidth:'1px',marginTop:'60px',color:'#fff'}}>Request A Consultation</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'}  gap={'60px'}>
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
    </Grid>
  );
}
