import React, {useEffect} from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import {Button} from './Button';
import {PortfolioFullProj} from './PortfolioFullProj';

import ArrowLeft from './images/icons/arrow-left.svg';
import ArrowRight from './images/icons/arrow-right.svg';

import {
    Manage,
    Bookmark,
    Insure,
    IPTrackerTop,
    CountriesDictionary,
    Covid,
    Crypto,
    Scoot,
    EasyBank,
    ChatApp,
    Dine,
    PhotoSnap, 
    Arch, 
    MyTeam,
    PayApi,
} from './TopImgProjects'
import {
    ManageStatic,
    BookmarkStatic,
    InsureStatic,
    IPTrackerStatic1,
    CryptoStatic1,
    CovidStatic1,
    ScootStatic1,
    EasyBankStatic1,
    ChatAppStatic1,
    DineStatic1,
    SnapshotStatic,
    ArchStatic, 
    MyTeamStatic,
    PayApiStatic,
} from './StaticImgProjects'
import {
    ManageStatic2,
    BookmarkStatic2,
    InsureStatic2,
    IPTrackerStatic,
    CountriesStatic,
    CryptoStatic2,
    CovidStatic2,
    ScootStatic2,
    EasyBankStatic2,
    ChatAppStatic2,
    DineStatic2,
    SnapshotStatic2,
    ArchStatic2, 
    MyTeamStatic2,
    PayApiStatic2,
} from './Static2ImgProjects'
import Image from 'next/image';

export default function ProjectFullViewA(props) {
    const ProjectTopImg = [
        Arch,
        PayApi,
        MyTeam,
        PhotoSnap
    ];
    const ProjectStaticImg =
        [ArchStatic,
            PayApiStatic,
            MyTeamStatic,
            SnapshotStatic];
    const ProjectStaticImg2 = 
        [ArchStatic2,
            PayApiStatic2,
            MyTeamStatic2,
            SnapshotStatic2];
    const previousProject = [3,0,1,2];
    const webLinks = [[
        "https://arch-web-clf94-dev.netlify.app",
        "https://pay-api-clf94-dev.netlify.app",
        "https://myteam-clf94-dev.netlify.app",
        "https://snapshot-web-clf94-dev.netlify.app",
        "https://covid-19-tracker-clf94-dev.netlify.app/",
        "https://crypto-price-eur-usd-tracker-clf94-dev.netlify.app/",
        "https://countries-info-api-clf94-dev.netlify.app/",
       ],
        ["https://arch-angular-clf94-dev.netlify.app",
        "https://payapi-angular-clf94-dev.netlify.app",
        "https://myteam-angular-clf94-dev.netlify.app",
        "https://photosnap-angular-clf94-dev.netlify.app",
        "",
        "",
        ""
        ],[
        "https://arch-vue-clf94-dev.netlify.app",
        "https://payapi-vue-clf94-dev.netlify.app",
        "https://vue-myteam-clf94-dev.netlify.app",
        "https://photosnap-vue-clf94-dev.netlify.app",
        "",
        "",
        ""
    ]]
    const nextProject = [1,2,3,0];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <div>
            <Grid2 container direction='column' className='full-project-cont'>
                <Image
                    className='project-top'
                    src={ProjectTopImg[props.index]}
                    alt="project hero"/>
                <Grid2 container direction="row" className='description-row'>
                    <Grid2 item sm={6} xs={12} direction='column' className='left-text'>
                        <hr/>
                        <h2>{PortfolioFullProj[props.index].titleRight}</h2>
                        <p>{PortfolioFullProj[props.index].textRight}</p>
                        <p>{PortfolioFullProj[props.index].angularText}</p>
                        <p>{PortfolioFullProj[props.index].vueText}</p>
                        <h5>{PortfolioFullProj[props.index].designType}</h5>
                        <h5>{PortfolioFullProj[props.index].languages}</h5>

                        <a href={webLinks[0][props.index]}>
                            <button className='project-btn' link={webLinks[0][props.index]}>

                                VIEW WEBSITE

                            </button>
                        </a>
                        <i className='fab fa-3x fa-react react'></i>
                        <div style={{display: !webLinks[1][props.index] && 'none'}}>
                        
                        <a href={webLinks[1][props.index]}>
                            <button className='project-btn' link={webLinks[1][props.index]}>

                                VIEW WEBSITE

                            </button>
                        </a><i className='fab fa-3x fa-angular angular'></i>
                        </div>
                        <div style={{display: !webLinks[2][props.index] && 'none'}}>
                        
                        <a href={webLinks[2][props.index]}>
                            <button className='project-btn' link={webLinks[2][props.index]}>

                                VIEW WEBSITE

                            </button>
                        </a><i className='fab fa-3x fa-vuejs vue'></i>
                        </div>
                        <hr/>
                    </Grid2>
                    <Grid2 item sm={6} xs={12} direction='column' className='right-text'>
                        <Grid2 container className='text-cont' direction='column'>
                            <h3>{PortfolioFullProj[props.index].titleLeft}</h3>
                            <p>{PortfolioFullProj[props.index].textLeft}</p>
                            <h3>{PortfolioFullProj[props.index].staticTitle}</h3>
                        </Grid2>
                        <Image src={ProjectStaticImg[props.index]} alt="static preview 1"/>
                        <Image src={ProjectStaticImg2[props.index]} alt="static preview 2"/>
                    </Grid2>
                </Grid2>

                <Grid2 container direction='row' className='next-prev-proj'>
                    <Grid2 item sm={6} xs={6} direction='row' className='column-left'>
                        <Grid2 container direction='row'>
                            <Grid2 item md={2} xs={4} direction='column'>
                                <Button
                                    buttonStyle='btn--outline'
                                    link={`/full-project-angular/${previousProject[props.index]}`}><Image className='previous-next-btn' src={ArrowLeft} alt="arrow left"/></Button>
                            </Grid2>
                            <Grid2 item md={10} xs={8} direction='column' className='previous-text'>
                                <h5>Previous Project</h5>
                                <h3>{PortfolioFullProj[previousProject[props.index]].titleRight}</h3>

                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Grid2 item sm={6} xs={6} direction='row' className='column-right'>
                        <Grid2 container direction='row'>
                            <Grid2 item md={10} xs={8} direction='column' className='next-text'>
                                <h5>Next Project</h5>

                                <h3>{PortfolioFullProj[nextProject[props.index]].titleRight}</h3>

                            </Grid2>
                            <Grid2
                                item
                                md={2}
                                xs={4}
                                direction='column'
                                style={{
                                textAlign: 'end'
                            }}>
                                <Button
                                    buttonStyle='btn--outline'
                                    link={`/full-project-angular/${nextProject[props.index]}`}><Image className='previous-next-btn' src={ArrowRight} alt="arrow right"/></Button>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>

        </div>
    )
}
