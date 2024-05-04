import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '60px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '12px' } }} mt="41px" textAlign="center" pb="40px">Stay Fit. Healthy Body is equal to Healthy Mind (Jay Prajapati)</Typography>
  </Box>
);

export default Footer;