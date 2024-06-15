'use client';
import React, { useState, useEffect } from 'react';
import { Grid, Typography,Button } from '@mui/material';
import NumberAnimation from '@/app/NumberAnimation';
import Image from 'next/image';
import mountainImg from '../../../public/images/assets/mountain.png';


export default function MiddleContent() {
 
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
     
    </Grid>
  );
}
