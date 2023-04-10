import React from 'react'
import Banner2 from '../assets/10837978_19333425.jpg'
import { Box, Stack, Typography, Button } from '@mui/material';
function HeroBanner() {
  return (
    <Box sx={{
      // mt: { lg: '100px', xs: '50px' },
      mt: '70px',
      ml: { sm: '50px' }
    }} position='relative' p='20px'>

      <Typography>
        <span className='buildText'>BUILD</span><span className='yourBodyText'>YOUR BODY</span>
      </Typography>
      <Typography>
        <span className='transformText'>TRANSFORM </span><span className='yourLifeText'>YOUR LIFE</span>
      </Typography>
      {/* </Typography> */}
      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={4}>
        Check Out the Most Effective Exercises
      </Typography>

      <Button variant="contained" color='error' sx={{ backgroundColor: '#ff2625', padding: '15px' }}
        onClick={() => {
          window.scrollTo({ top: 1000, left: 100, behavior: 'smooth' });
        }}
      >Explore Exercise</Button>

      <Typography
        fontWeight={600}
        // color="#ff2625"
        color="#ab8da7"
        sx={{
          opacity: 0.15,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize='200px' textAlign='center' marginTop='100px'>EXERCISES</Typography>
      <img src={Banner2} alt="Banner" className='hero-banner-img' />

    </Box >
  )
}

export default HeroBanner

