import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import Link from 'next/link'
import WLogo from './images/logo copy.svg';
import Image from 'next/image';

function Footer() {
    return (
        <div>
            <Grid2 container direction='row' className='footer-cont'>
                <Grid2 item sm={2} xs={12}className='footer-item'>
                    <Link href='/' className='footer-link'><Image src={WLogo} alt="footer logo"/></Link>
                </Grid2>
                <Grid2 item sm={2} xs={12} className='footer-item'>
                    <Link href='/' className='footer-link'>Home</Link>
                </Grid2>
                <Grid2 item sm={2} xs={12} className='footer-item'>
                    <Link href='/portfolio' className='footer-link'>Portfolio</Link>
                </Grid2>
                <Grid2 item sm={2} xs={12} className='footer-item'>
                    <Link href='/contact-me' className='footer-link'>Contact Me</Link>
                </Grid2>
                <Grid2 item sm={2} xs={12} className='footer-item'></Grid2>
                <Grid2 item sm={2} xs={12} className='footer-item'>
                    <Grid2 container direction='row' className='social-row'>
                       <a href="https://github.com/clf94-dev" className='footer-link'><i className=' fab fa-2x fa-github social-icon'></i></a> 
                        <a href=""className='footer-link'><i className=' fab fa-2x fa-twitter social-icon'></i></a>
                       <a href= "https://www.linkedin.com/in/carmen-lucas-fornell-994998144/"className='footer-link'><i className=' fab fa-2x fa-linkedin social-icon'></i></a> 
                    </Grid2>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Footer;
