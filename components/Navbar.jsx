import React, { useState } from 'react';
import Link from 'next/link'
import Logo from './images/logo.svg';
import Image from 'next/image';

function Navbar({active}) {
const [click, setClick] = useState(false);

const handleClick=() =>setClick(!click);
const closeMobileMenu=(  )=> setClick(false);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <Image src={Logo} alt="navbar logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i
                        className={click
                        ? 'fas fa-times'
                        : 'fas fa-bars'}></i>

                </div>
                <ul
                    className={click
                    ? 'nav-menu active'
                    : 'nav-menu'}>
                    <li className="nav-item" >
                        <Link href='/' className='nav-links' onClick={closeMobileMenu} style={{color: active === "home"? '#5fb4a2' :'#203A4C'}}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/portfolio' className='nav-links' onClick={closeMobileMenu} style={{color: active === "portfolio"? '#5fb4a2' :'#203A4C'}}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/contact-me' className='nav-links' onClick={closeMobileMenu} style={{color: active === "contact-me"? '#5fb4a2' :'#203A4C'}}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;