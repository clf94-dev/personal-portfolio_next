import React, { useState } from 'react';
import Link from 'next/link'
import Logo from './images/logo.svg';
import Image from 'next/image';
import {StyledNavbar} from './Navbar.styled'
import { useTheme } from 'styled-components';

function Navbar({active}) {
const [click, setClick] = useState(false);
const theme = useTheme();

const handleClick=() =>setClick(!click);
const closeMobileMenu=(  )=> setClick(false);
    return (
        <StyledNavbar>
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
                        <Link href='/' className='nav-links' onClick={closeMobileMenu} style={{color: active === "home"? '#5fb4a2' : theme.navbarText}}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/portfolio' className='nav-links' onClick={closeMobileMenu} style={{color: active === "portfolio"? '#5fb4a2' :theme.navbarText}}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/contact-me' className='nav-links' onClick={closeMobileMenu} style={{color: active === "contact-me"? '#5fb4a2' :theme.navbarText}}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    );
};

export default Navbar;