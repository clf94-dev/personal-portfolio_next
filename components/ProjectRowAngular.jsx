import React, {useEffect} from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import {Button} from './Button';

import {Arch, PayApi, MyTeam,  PhotoSnap } from './PortfolioImg'

import AOS from 'aos'
import Image from 'next/image';

function ProjectRowAngular(props) {
    const ProjectsImg = [Arch, PayApi, MyTeam,PhotoSnap ];
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Grid2 container direction="row" className={props.classes} data-aos={props.animation} data-aos-duration="1200">
                <Grid2 item md={6} xs={12} className='img-col'>
                    <Image
                        src={ProjectsImg[props.index]}
                        alt=" image"
                        className='project-img'/>
                </Grid2>
                <Grid2 item md={6} xs={12} className='text-col' direction='column'>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <Button
                        className='project-btn'
                        link={`/full-project-angular/${props.index}`}
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        VIEW PROJECT
                          </Button>

                </Grid2>

            </Grid2>
        </div>
    )
}

export default ProjectRowAngular
