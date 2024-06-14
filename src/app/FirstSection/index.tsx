"use client";
import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material';
import NumberAnimation from '@/app/NumberAnimation';
import Image from 'next/image';
import mountainImg from "../../../public/images/assets/mountain.png";
import Card from '@/components/Card';
import SRE from "../../../public/images/assets/SRE.png";
import Cloud from "../../../public/images/assets/cloud.png";
import Containerization from "../../../public/images/assets/containerization.png"
import Analytics from "../../../public/images/assets/Analytics.png"
import Devops from "../../../public/images/assets/devops.png"
import platform from '../../../public/images/assets/Platform_engineering.png'
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
    <Grid container justifyContent="center" className='first-section'>
      <Grid item sx={{zIndex: 1}}>
        <Typography
          color='#F8F9FA'
          fontFamily='Inter'
          fontSize='91px'
          fontWeight='700'
          letterSpacing='51px'
        >
          NEU VEU
        </Typography>
        <Grid container justifyContent="center">
          <Typography fontSize={'20px'} fontWeight={'300'} color='#F8F9FA'>Best Solutions for </Typography>

        </Grid>
        <Grid container justifyContent="center">
          <Typography fontSize={'20px'} fontWeight={'300'} color='#F8F9FA'><strong style={{ fontWeight: '700' }}>Digital &amp; Cloud</strong>  Services</Typography>

        </Grid>


      </Grid>
      <Grid container justifyContent="center" display={'flex'} gap={'80px'} mt={'600px'} sx={{zIndex: 1}}>
        {/* <Grid item display={'flex'} gap={'20px'}>
          <Typography fontSize={'40px'} fontWeight={'400'} color='#F8F9FA'><NumberAnimation number={numbers.number1} /></Typography>
          <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'} color='#F8F9FA'>YEARS OF CONSULTING <br /> EXPERIENCE</Typography>

        </Grid>
        <Grid item display={'flex'} gap={'20px'}>
          <Typography fontSize={'40px'} fontWeight={'400'} color='#F8F9FA'><NumberAnimation number={numbers.number2} /></Typography>
          <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'} color='#F8F9FA'>PROJECTS <br /> COMPLETED</Typography>

        </Grid>
        <Grid item display={'flex'} gap={'20px'}>
          <Typography fontSize={'40px'} fontWeight={'400'} color='#F8F9FA'><NumberAnimation number={numbers.number3} /></Typography>
          <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'} color='#F8F9FA'>SATISFIED CLIENTS ON   <br />8 COUNTRIES</Typography>

        </Grid> */}
        <Typography textAlign={'center'}  fontSize={'20px'} fontWeight={'500'} lineHeight={'24px'} color='#F8F9FA'>We can help to maintain and modernize your Digital & Cloud infrastructure and solve various <br/> digital transformation-specific issues a business may face.</Typography>
        <Typography textAlign={'center'}  fontSize={'14px'} fontWeight={'400'} lineHeight={'24px'} color='#F8F9FA'>Neu Veu is the partner of choice for many of the world’s leading 
        <br/> enterprises, SMEs and technology challengers. We help businesses elevate their value through. <br/>DevSecOps, Analytics, Cloud, SRE and Platform Engineering consultancy services.</Typography>

      </Grid>

      {/* <div className='mountain-img-container'>
        <div className='mountain-widget-container'>
          <div className='iteck-image'>
            <Image loading="lazy" decoding="async" width="1478" height="1486" src={mountainImg} alt="mountain" />
          </div>
        </div>
      </div> */}
      <Grid item display={'flex'} justifyContent={'center'} >
   <Card heading={'Cloud'} body={'We specialize in comprehensive multi-cloud strategies, seamless cloud migration, and optimized architecture, delivering scalable, secure, and agile cloud solutions'} image={Cloud }/>
   <Card heading={'Containerization'} body={'We excel in containerization leveraging modern technologies like Kubernetes, ensuring cloud-agnostic, scalable, and efficient application deployment'} image={SRE }/>
   <Card heading={'SRE'} body={'We offer expertise in delivering performance monitoring, incident management, and system optimization for unrivaled system reliability and scalability'} image={Containerization }/>
   <Card heading={'Analytics'} body={'We deliver data-driven analytics solutions, harnessing advanced algorithms and visualization for informed decision-making and business success'} image={Analytics }/>
   <Card heading={'DevSecOps'} body={'We accelerate your software delivery with streamlined DevSecOps pipelines, enhancing security collaboration, automation, and continuous improvement'} image={Devops }/>
   <Card heading={'Platform Engineering'} body={'We provide advanced technology implementation, automation, seamless system management, and transformative innovation for enhanced efficiency and success'} image={platform }/>


   </Grid>

    </Grid>

  )
}
