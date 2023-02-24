import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'

import {Button} from './Button';


function Languages(){
    return(
<div className='languages-cont'>
    <h3>Frameworks I use</h3>
<Grid2 container direction="row" className="icons-row" data-aos="fade-up">
<Grid2 item xs={12} sm={6} md={2} direction='column' className="logo" data-aos="fade-up" data-aos-delay='100'>
    <i className='fab fa-4x fa-react react'></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={2} direction='column' className="logo" data-aos="fade-up" data-aos-delay='300'>
    <i className='fab fa-4x fa-angular angular'></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={2} direction='column' className="logo" data-aos="fade-up" data-aos-delay='500'>
    <i className='fab fa-4x fa-vuejs vue'></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={2} direction='column' className="logo" data-aos="fade-up" data-aos-delay='700'>
    <i className='fab fa-4x fa-js javascript'></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={2} direction='column' className="logo" data-aos="fade-up" data-aos-delay='900'>
    <i className='fab fa-4x fa-css3-alt css'></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={2} direction='column' className="logo" data-aos="fade-up" data-aos-delay='1000'>
    <i className='fab fa-4x fa-html5 html'></i>
</Grid2>

</Grid2>

<h3>Other libraries I use</h3>
<Grid2 container direction="row" className="icons-row">
<Grid2 item xs={12} sm={6} md={3} direction='column' className="logo" data-aos="fade-up" data-aos-delay='100'>
    <i className='fab fa-4x fa-sass sass'></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={3} direction='column' className="logo" data-aos="fade-up" data-aos-delay='300'>
<i className="fab fa-4x fa-bootstrap boots"></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={3} direction='column' className="logo" data-aos="fade-up" data-aos-delay='500'>
<i class="fab fa-4x fa-npm npm"></i>
</Grid2>
<Grid2 item xs={12} sm={6} md={3} direction='column' className="logo" data-aos="fade-up" data-aos-delay='700'>
<i className="fab fa-4x fa-github-square git"></i>
</Grid2>


</Grid2>
</div>)
}

export default Languages;