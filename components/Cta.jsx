import React, {useEffect} from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'

import {Button} from './Button';

import AOS from 'aos'


function Cta() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Grid2 container direction='row' className='cta-cont' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <Grid2 item md={6} xs={12} className='text-col'>
                    <h2>Interested in doing a project together?</h2>
                </Grid2>

                <Grid2 item md={6} xs={12} className='btn-col'>
                    <Button
                        className='cta-btn'
                        link='/contact-me'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        CONTACT ME
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Cta;
