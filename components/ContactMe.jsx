import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import {Button} from './Button';
import Form from './Form';

function ContactMe() {
    return (
        <div>
            <Grid2 container className="contact-me-cont">
                <hr/>
                <Grid2 container direction='row' className='contact-top'>

                    <Grid2 item md={6} xs={12} direction='column' className='title-col'>
                        <h3>Get in touch</h3>
                    </Grid2>
                    <Grid2 item md={6} xs={12} direction='column' className='right-col'>
                        <p>
                            I’d love to hear about what you’re working on and how I could help. I’m
                            currently looking for a new role and am open to a wide range of opportunities.
                            My preference would be to find a position in a company in Madrid. But I’m also
                            happy to hear about opportunites that don’t fit that description. I’m a
                            hard-working and positive person who will always approach each task with a sense
                            of purpose and attention to detail. Please do feel free to check out my online
                            profiles below and get in touch using the form.</p>

                        <Grid2 container direction='row' className='contact-me-cont'>
                            <a href="https://github.com/clf94-dev" className='footer-link'>
                                <i className=' fab fa-2x fa-github social-icon'></i>
                            </a>
                            <a href="" className='footer-link'>
                                <i className=' fab fa-2x fa-twitter social-icon'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/carmen-lucas-fornell-994998144/" className='footer-link'>
                                <i className=' fab fa-2x fa-linkedin social-icon'></i>
                            </a>
                        </Grid2>
                    </Grid2>

                </Grid2>

                <hr/>
                <Grid2 container direction='row' className='input-cont'>
                    <Grid2 item sm={6} xs={12} direction='column' className='title-col'>
                        <h2>Contact Me</h2>
                    </Grid2>
                    <Grid2 direction='column' item sm={6} xs={12} className='right-col'>
                        <Form/>
                    </Grid2>

                </Grid2>
            </Grid2>
        </div>
    )
}

export default ContactMe;
