import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function Card({image,heading,body}:any) {
  return (
    <Grid container display={'flex'} flexDirection={'column'} justifyContent="center" className='card-container'>
     <Image src={image} alt='img' className='img-content' style={{marginBottom:'40px'}}/>
     <Typography className='card-head'>{heading}</Typography>
     <Typography className='card-body' fontSize={'15px'} fontWeight={400}>{body}</Typography>

    </Grid>
  )
}
