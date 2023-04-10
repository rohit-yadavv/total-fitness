import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : {border: '4px solid #90758c', background: '#fff', borderRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px',   boxShadow: '5px 5px 25px -5px rgba(0, 0, 0, 0.5)' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img className='BodyPartImage' src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography className='BodyPartName' textAlign = 'center' fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;