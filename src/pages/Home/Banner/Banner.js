import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {

    return (

        <Box>
            <img width='100%' height='500px' src="https://wallpaperaccess.com/full/2720813.jpg" alt="" />

            <Box sx={{ display: 'flex', mt: -10, justifyContent: 'right', mx: 5 }}>
                <NavLink style={{ textDecoration: 'none' }} to='allProducts'>  <Button sx={{ width: '220px' }} variant='contained'> All Products</Button></NavLink>
            </Box>
        </Box>


    );
};

export default Banner;