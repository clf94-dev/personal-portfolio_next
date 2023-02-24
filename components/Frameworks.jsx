import React from 'react'

import Link from 'next/link'



function Frameworks(){
    return(
        <div className="frameworks-cont">
            <h3>Projects by framework</h3>
           <Link className="link" href='/portfolioreact'> <div className="react-cont" data-aos='fade-left' >
                <h3>React   <i className='fab fa-2x fa-react react'></i></h3>
                <p>Also used with React:  <i className='fab fa-sass sass'></i>,<i className="fab fa-font-awesome font-awe"></i>, Material-UI, AOS Animation </p>
            </div></Link>
            <Link className="link" href='/portfolioangular'><div className="angular-cont" data-aos='fade-left' >
                <h3>Angular   <i className='fab fa-2x fa-angular angular'></i></h3>
                <p>Also used with Angular:  <i className='fab fa-sass sass'></i>,<i className="fab fa-font-awesome font-awe"></i>, Flex-Layout, AOS Animation </p>
            </div></Link>
            <Link className="link" href='/portfoliovue'><div className="vue-cont" data-aos='fade-left' >
                <h3>Vue   <i className='fab fa-2x fa-vuejs vue'></i></h3>
                <p>Also used with Vue:    <i className='fab fa-css3-alt css'></i>,<i className="fab fa-font-awesome font-awe"></i>,<i className="fab fa-bootstrap boots"></i>,vue-router, AOS Animation </p>
            </div></Link>
        </div>
    )}

export default Frameworks;