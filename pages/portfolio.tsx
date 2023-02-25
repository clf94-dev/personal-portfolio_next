import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core/';

/* import '../styles/App.css'; */
import { PortfolioData} from '../components/data/PortfolioData'
import ProjectRow from '../components/ProjectRow';
import Cta from '../components/Cta';
import Navbar from '../components/Navbar';


function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
             <Navbar active='portfolio'/>
            {PortfolioData.map((item:{ [key: string]: string | number}, index:number) =>{
                return (<ProjectRow key={index} index={item.index} animation={item.animation}  title={item.title} text={item.text} classes={item.classes} />)
            })}
               <Cta/>
        </div>
    )
}

export default Portfolio;
