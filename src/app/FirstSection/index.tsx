"use client";
import React, {useState,useEffect} from 'react'
import {Grid,Typography} from '@mui/material';
import NumberAnimation from '@/app/NumberAnimation';


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
    <Grid item>
        <Typography 
            color='#F8F9FA' 
            fontFamily='Inter' 
            fontSize='91px' 
            fontWeight='700' 
            letterSpacing='51px'
        >
            NEU VEU
        </Typography>
        <Grid container  justifyContent="center">
        <Typography fontSize={'20px'} fontWeight={'300'}  color='#F8F9FA'>Best Solutions for </Typography>

        </Grid>
        <Grid container  justifyContent="center">
        <Typography fontSize={'20px'} fontWeight={'300'}  color='#F8F9FA'><strong style={{fontWeight:'700'}}>Digital and Cloud</strong>  Services</Typography>

        </Grid>
       

    </Grid>
<Grid container justifyContent="center" display={'flex'} gap={'80px'} mt={'600px'}>
    <Grid item display={'flex'} gap={'20px'}>
   <Typography fontSize={'40px'} fontWeight={'400'}  color='#F8F9FA'><NumberAnimation number={numbers.number1} /></Typography>
   <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'}  color='#F8F9FA'>YEARS OF CONSULTING <br/> EXPERIENCE</Typography>

    </Grid>
    <Grid item display={'flex'} gap={'20px'}>
   <Typography fontSize={'40px'} fontWeight={'400'}  color='#F8F9FA'><NumberAnimation number={numbers.number2} /></Typography>
   <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'}  color='#F8F9FA'>PROJECTS <br/> COMPLETED</Typography>

    </Grid>
    <Grid item display={'flex'} gap={'20px'}>
   <Typography fontSize={'40px'} fontWeight={'400'}  color='#F8F9FA'><NumberAnimation number={numbers.number3} /></Typography>
   <Typography fontSize={'12px'} fontWeight={'300'} lineHeight={'25px'}  color='#F8F9FA'>SATISFIED CLIENTS ON   <br/>8 COUNTRIES</Typography>

    </Grid>
</Grid>
    
</Grid>

  )
}
