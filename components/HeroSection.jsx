import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import HeroTopImg from './images/homepage/image-homepage-hero.jpg'
import Image from 'next/image';
import {StyledHeroSection} from './HeroSection.styled'

function HeroSection() {

    
    return (
            <StyledHeroSection>
                <Grid2 item md={6} xs={12} className='img-col'>
                    <Image 
                        src={HeroTopImg} 
                        alt="hero section image"   
                        width={800}
                        height={800} 
                        className='hero-section-img'/>
                </Grid2>
                <Grid2 item md={6} xs={12} className='text-col'>
                    <h1>Hey, I’m Carmen Lucas and I love building beautiful and responsive websites</h1>

                </Grid2>

            </StyledHeroSection>
    )
}

export default HeroSection;
