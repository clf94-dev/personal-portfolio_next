import styled from 'styled-components';


export const StyledNavbar = styled.div`
    font-family: ${props => props.theme.fontBody};
    font-weight: ${props => props.theme.fontWeight4};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: ${props => props.theme.body};
    top: 0;
    z-index: 5;
    .navbar-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        max-width: 1600px;
        .navbar-logo {
            display: flex;
            justify-self: start;
            margin-left: 20px;
            align-items: center;
            filter: ${props => `invert(${props.theme.iconColor})`};
        }
        .nav-menu {
            @media screen and (min-width: 756px) {
                margin-left: 100px;
            }
            display: flex;
            flex-direction: row;
            list-style: none;
            text-align: center;
            width: 60vw;
            justify-content: end;
            margin-right: 2rem;
            .nav-item {
                
                .nav-links {
                    color: ${props => props.theme.navbarText};
                    
                    display: flex;
                    text-decoration: none;
                    padding: 1.7rem 1rem;
                    height: 100%;
                    &:hover {
                        color: ${props => props.theme.navbarTextHover};
                    }
                }
            }
        }
    }


.menu-icon {
    display: none;
    font-size: 2rem;
    .fa-bars,
    .fa-times {
        color: ${props => props.theme.navbarText};
    }
}

@media screen and (max-width:960px) {
    .nav-menu {
        display: flex;
        flex-direction: column !important;
        grid-gap: 5px;
        width: 100%;
        height: 38vh;
        position: absolute;
        top: 80px;
        right: - 100%;
        opacity: 1;
        transition: all 0.3s ease-in;
        .navbar-logo {
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            transform: translate(25%, 50%) !important;
        }
    }
    .nav-menu.active {
        justify-content: start !important;
        background-color: ${props => props.theme.navbarText};
        right: 0;
        opacity: 1;
        transition: all 0.3s ease;
        z-index: 5;
        .nav-item {
            .nav-links {
                justify-content: center !important;
                margin: 5px 0 auto;
                padding: 2rem !important;
                color: white !important;
                width: 100%;
                display: table;
                &:hover {
                    color: ${props => props.theme.navbarText};
                    background-color: white;
                }
            }
        }
    }
    .menu-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.8rem;
        transform: translate(-100%, 60%);
        cursor: pointer;
        .fa-times {
            font-size: 2rem;
        }
    }
}

    

`;