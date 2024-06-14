import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function ConsultantTemplate({img,head,desc}:any) {
  return (
    <Grid item display={'flex'} gap={'24px'} pt={4} >
        <Image  src={img}  alt=''/>
        <Grid item>
        <Typography fontSize={'20px'} color={'#fff'}>{head}</Typography>
        <Typography fontSize={'14px'} color={'#fff'} margin={'4px 0px 0px'} fontWeight={300}>{desc}</Typography>


        </Grid>
    </Grid>
  )
}
